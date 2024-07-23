/** @format */

import { applyMiddleware, createStore } from "redux"
import { thunk } from "redux-thunk"
import { rootReducer } from "./Reducer/reducer"

export const makeStore = createStore(rootReducer, applyMiddleware(thunk))
