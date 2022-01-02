import fetchListData from "../../API_MOCK";
import { assignUniqueIDs, flattenNestedList } from "../../utilities/helpers";

export const FETCH_LIST = "FETCH_LIST";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const fetchListItems = (
  list: ListType,
  error: any,
  loading: boolean
) => ({
  type: FETCH_LIST,
  list,
  error,
  loading,
});

export const removeItem = (item: ListItemType) => ({
  type: REMOVE_ITEM,
  item,
});

export const getList = () => {
  return async (dispatch: (action: any) => void) => {
    dispatch(fetchListItems([], null, true));

    try {
      const originalListData = await fetchListData(false);

      // OPTIMIZATION: In a real application, it would be better to have the originalListData coming
      // from the server as a Flat list (with a parent > child relationship, e.g. { title: '...', id: 'x', parentId: 'y' })
      // instead of a nested data structure, which would let the Frontend avoid flattening the data and determining the
      // relationships between entities on the browser, which is kind of heavy processing, i.e. recursion
      const flatList = flattenNestedList(assignUniqueIDs(originalListData));

      dispatch(fetchListItems(flatList, null, false));
    } catch (e) {
      dispatch(fetchListItems([], e, false));
    }
  };
};
