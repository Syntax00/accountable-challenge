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
        flatten(item.list, result);
      } else {
        result.push(item);
      }
    });
  };

  flatten(_list, flattened);

  return flattened;
};

export { assignUniqueIDs, flattenNestedList };
