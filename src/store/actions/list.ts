import fetchListData from "../../API_MOCK";
import {
  appendSearchableTextsToList,
  transformDataIntoFlatTreeStructure,
} from "../../utilities/helpers";

const FETCH_LIST = "FETCH_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";
const SHUFFLE_LIST = "SHUFFLE_LIST";

const setListItems = (list: ListType, error: any, loading: boolean) => ({
  type: FETCH_LIST,
  list,
  error,
  loading,
});

const removeItem = (id: string) => ({
  type: REMOVE_ITEM,
  id,
});

const shuffleList = () => ({
  type: SHUFFLE_LIST,
});

const getList = () => {
  return async (dispatch: (action: any) => void) => {
    dispatch(setListItems([], null, true));

    try {
      const originalListData = await fetchListData();

      // OPTIMIZATION: In a real application, it would be better to have the originalListData coming
      // from the server as a Flat list by default (with a parent > child relationship, e.g. { title: '...', id: 'x', parentId: 'y' })
      // instead of a nested data structure, which would let the Frontend avoid flattening the data and determining the
      // relationships between entities on the browser, which is kind of heavy processing, i.e. recursion
      const flatListWithSearchableTexts = appendSearchableTextsToList(
        transformDataIntoFlatTreeStructure(originalListData)
      );

      dispatch(setListItems(flatListWithSearchableTexts, null, false));
    } catch (e) {
      dispatch(setListItems([], e, false));
    }
  };
};

export {
  FETCH_LIST,
  REMOVE_ITEM,
  SHUFFLE_LIST,
  setListItems,
  removeItem,
  shuffleList,
  getList,
};
