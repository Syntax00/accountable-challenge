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
        result.push(rest);
        flatten(list, result);
      } else {
        result.push(item);
      }
    });
  };

  flatten(_list, flattened);

  return flattened;
};

function buildTreeStructure(list: ListType = []) {
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
}

const getParentsItems = (list: ListType = []) =>
  list.filter((item: ListItemType) => !item.__pId__);

const searchItems = (list: ListType, search: string): ListType =>
  list.filter((item: ListItemType) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

export {
  assignUniqueIDs,
  flattenNestedList,
  buildTreeStructure,
  getParentsItems,
  searchItems,
};
