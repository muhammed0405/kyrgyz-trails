import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { toursReducer } from "./toursReducer";
export const rootReducer = combineReducers({
    user: userReducer,
    tours: toursReducer,
});

export type RootState = ReturnType<typeof rootReducer>;