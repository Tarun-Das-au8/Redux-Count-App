import { combineReducers } from "redux";
import countReducer from "./countReducer";

export const reducers = combineReducers({
    countReducer: countReducer
});

export type State = ReturnType<typeof reducers>