import { createStore } from "redux";
import myReducer from "./reducers";

//we need to send myReducer into this store//
const store = createStore(myReducer);

export default store;
