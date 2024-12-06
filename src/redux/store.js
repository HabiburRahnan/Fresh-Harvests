import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseapi";
// import authReducer from "./slice/authSlice";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(baseApi.middleware),
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;