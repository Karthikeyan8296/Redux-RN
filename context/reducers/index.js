import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

//after making multiple reducers or multiple states we should combine it//
const myReducer = combineReducers({
  counter: counterReducer,
});

export default myReducer;
