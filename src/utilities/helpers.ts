import { v4 as uuidv4 } from "uuid";
import _cloneDeep from "lodash/cloneDeep";

const transformDataIntoFlatTreeStructure = (
  originalList: ListType
): ListType => {
  // Clone the original list into a copy to avoid mutating the original array
  const list = _cloneDeep(originalList);

  // Final flattened array of list items with __id__ and __pId__ relationship
  const flattenedList: ListType = [];

  const flattenWithIDs = (
    listItems: ListType,
    parentId: string | null
  ): void => {
    listItems.forEach((item: ListItemType) => {
      // Assign unique ids and parentIds to form a Tree Data Structure using __id__ > __pId__ relationship
      item.__id__ = uuidv4();
      item.__pId__ = parentId;

      const { list, ...rest } = item;

      flattenedList.push(rest);

      if (list && list.length > 0) {
        flattenWithIDs(list, item.__id__);
      }
    });
  };

  flattenWithIDs(list, null);

  return flattenedList;
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
  list.filter(({ __pId__ }: ListItemType) => !__pId__);

// TO BE UNIT-TESTED
const searchInString =
  (term: string = "") =>
  ({ searchableText }: ListItemType): boolean =>
    new RegExp(term.toLowerCase()).test(searchableText.toLowerCase());

// TO BE UNIT-TESTED
const searchItems = (list: ListType = [], search: string = ""): ListType =>
  list.filter(searchInString(search));

// TO BE UNIT-TESTED
const getItemById = (
  list: ListType,
  id: string | undefined
): ListItemType | undefined =>
  list.find((item: ListItemType) => item.id === id);

// TO BE UNIT-TESTED
const removeItemById = (list: ListType, id: string) =>
  list.filter((item: ListItemType) => item.id !== id);

const getItemSearchableText = ({ title, description }: ListItemType) =>
  `${title} ${description}`;

const getChildrenSearchableText = (id: string | undefined, list: ListType) => {
  let children: string[] = [];

  list
    .filter(({ __pId__ }: ListItemType) => __pId__ === id)
    .forEach((child: ListItemType) => {
      children.push(getItemSearchableText(child));

      children = children.concat(getChildrenSearchableText(child.__id__, list));
    });

  return children;
};

const appendSearchableTextsToList = (list: ListType) =>
  list.map((item: ListItemType) => {
    if (item.__pId__)
      return { ...item, searchableText: getItemSearchableText(item) };

    const parentNodeSearchableText = [
      getItemSearchableText(item), // Parent's own title
      ...getChildrenSearchableText(item.__id__, list), // Parent's children titles
    ].join(" ");

    return {
      ...item,
      searchableText: parentNodeSearchableText,
    };
  });

const getItemAbbreviation = (title: string = ""): string =>
  title
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export {
  transformDataIntoFlatTreeStructure,
  buildTreeStructure,
  getParentsItems,
  searchItems,
  getItemById,
  removeItemById,
  getChildrenSearchableText,
  getItemSearchableText,
  appendSearchableTextsToList,
  searchInString,
  getItemAbbreviation,
};
