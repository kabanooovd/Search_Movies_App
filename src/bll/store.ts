import {applyMiddleware, combineReducers, createStore } from "redux";
import {searchMovieReducer} from "./searchMovieReducer";
import thunk from "redux-thunk";

export type RootReducer_T = ReturnType<typeof RootReducer>

export const RootReducer = combineReducers({
    moviesData: searchMovieReducer
})

export const store = createStore(RootReducer, applyMiddleware(thunk))





