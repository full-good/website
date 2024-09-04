import { configureStore } from "@reduxjs/toolkit";
import colorsSlice from "./colorslice";
import userSlice from "./userslice";

const Store = configureStore({
    reducer: {
        colorsSlice,
        userSlice
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export default Store;