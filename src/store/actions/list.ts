import fetchListData from "../../API_MOCK";

export const FETCH_LIST = "FETCH_LIST";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const fetchListItems = (list: ListType, error: any, loading: boolean) => ({
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
      const listData = await fetchListData(false);

      dispatch(fetchListItems(listData, null, false));
    } catch (e) {
      dispatch(fetchListItems([], e, false));
    }
  };
};
