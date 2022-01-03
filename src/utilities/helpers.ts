import { v4 as uuidv4 } from "uuid";
import _cloneDeep from "lodash/cloneDeep";

const assignUniqueIDs = (list: ListType): ListType => {
  // Clone the original list into a copy to avoid mutating the original array
  const _list = _cloneDeep(list);

  // Assign unique ids and parentIds to form a Tree Data Structure using __id__ > __pId__ relationship
  const assign = (listItems: ListType, parentId: string | null): void => {
    listItems.forEach((item: ListItemType) => {
      item.__id__ = uuidv4();
      item.__pId__ = parentId;

      if (item.list && item.list.length > 0) {
        assign(item.list, item.__id__);
      }
    });
  };

  assign(_list, null);

  return _list;
};

const flattenNestedList = (list: ListType): ListType => {
  const _list = _cloneDeep(list);
  const flattened: ListType = []; // Final flattened array

  // Recurse over the original nested data structure and flatten it into a flat list
  const flatten = (listItems: ListType, result: ListType) => {
    listItems.forEach((item) => {
      if (item.list) {
        const { list, ...rest } = item;

        result.push(rest); // Push the item data and exclude the children "list"
        flatten(list, result);
      } else {
        result.push(item);
      }
    });
  };

  flatten(_list, flattened);

  return flattened;
};

const buildTreeStructure = (list: ListType = []) => {
  const _list = _cloneDeep(list);

  return function treeBuilder(parent: ListItemType) {
    const childList = _list.filter(
      (item: ListItemType) => item.__pId__ === parent.__id__
    );
    const itemWithChildList = {
      ...parent,
      list: childList,
    };

    itemWithChildList.list.forEach((child: ListItemType) => {
      child.list = [...treeBuilder(child).list];
    });

    return itemWithChildList;
  };
};

// TO BE UNIT-TESTED
const getParentsItems = (list: ListType = []): ListType =>
  list.filter((item: ListItemType) => !item.__pId__);

// TO BE UNIT-TESTED
const searchItems = (list: ListType, search: string): ListType =>
  list.filter((item: ListItemType) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

// TO BE UNIT-TESTED
const getItemById = (
  list: ListType,
  id: string | undefined
): ListItemType | undefined =>
  list.find((item: ListItemType) => item.id === id);

// TO BE UNIT-TESTED
const removeItemById = (list: ListType, id: string) =>
  list.filter((item: any) => item.id !== id);

export {
  assignUniqueIDs,
  flattenNestedList,
  buildTreeStructure,
  getParentsItems,
  searchItems,
  getItemById,
  removeItemById,
};
