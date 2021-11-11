import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {ApiAnimals, ApiFirst, ApiNumber} from "../services/Api";
import appReducer from "./appSlice";

let rootReducer = combineReducers({
    appReducer: appReducer,
    [ApiFirst.reducerPath]: ApiFirst.reducer,
    [ApiNumber.reducerPath]: ApiNumber.reducer,
    [ApiAnimals.reducerPath]: ApiAnimals.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(ApiFirst.middleware, ApiNumber.middleware, ApiAnimals.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

