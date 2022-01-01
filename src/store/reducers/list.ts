import actions from "../actions";

const initialState = {
  loading: false,
  error: null,
  list: [],
};

const listReducer = (state: ListStateType = initialState, action: any = {}) => {
  switch (action.type) {
    case actions.FETCH_LIST:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        list: action.list,
      };
    case actions.REMOVE_ITEM:
      return {
        ...state,
        list: state.list.filter((item: any) => item.id !== action.item.id),
      };
    default:
      return state;
  }
};

export default listReducer;
