import { combineReducers } from "redux";

import listReducer from "./list";

// In case the application gets bigger, this file can be useful to combine reducers before exporting them
// so that they can be used directly into the createStore function outside as a single reducer

export default combineReducers({ list: listReducer });
