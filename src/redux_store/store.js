import {legacy_createStore as createStore} from "redux";
import {cartReducer} from "./reducers.js";

export const store = createStore(cartReducer);
