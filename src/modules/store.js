import { createStore } from "redux";
import { reducer } from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ reducer });
const store = createStore(rootReducer);

export default store;
