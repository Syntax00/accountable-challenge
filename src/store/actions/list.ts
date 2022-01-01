export const FETCH_LIST_ITEMS = "FETCH_LIST_ITEMS";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const fetchListItems = (items: any[], error: any, loading: boolean) => ({
  type: FETCH_LIST_ITEMS,
  items,
  error,
  loading,
});

export const removeItem = (item: any) => ({
  type: REMOVE_ITEM,
  item,
});
