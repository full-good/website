import { configureStore } from "@reduxjs/toolkit";
import colorsSlice from "./colorslice";

const Store = configureStore({
    reducer: {
        colorsSlice
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export default Store;