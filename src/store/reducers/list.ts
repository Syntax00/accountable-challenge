import actions from "../actions";
import { removeItemById, shuffleList } from "../../utilities/helpers";

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
        list: removeItemById(state.list, action.id),
      };
    case actions.SHUFFLE_LIST:
      return {
        ...state,
        list: shuffleList(state.list),
      };
    default:
      return state;
  }
};

export default listReducer;
