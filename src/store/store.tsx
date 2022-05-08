import {combineReducers, createStore} from "redux";
import {reducer1} from "./reducers/reducer1";

export type rootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    reducer:reducer1
})

const store = createStore(rootReducer)
