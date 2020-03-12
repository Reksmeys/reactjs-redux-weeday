import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/rootReducer";

const middleware = [thunk]

export const centralStore = createStore(rootReducer, compose(applyMiddleware(...middleware)))