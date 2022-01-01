import actions from "../actions";

const initialState = {
  loading: false,
  error: null,
  items: [],
};

type initialStateType = {
  loading: boolean;
  error: string | null;
  items: any[];
};

const listReducer = (
  state: initialStateType = initialState,
  action: any = {}
) => {
  switch (action.type) {
    case actions.FETCH_LIST_ITEMS:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        items: action.items,
      };
    case actions.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item: any) => item.id !== action.item.id),
      };
    default:
      return state;
  }
};

export default listReducer;
