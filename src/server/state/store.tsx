import { configureStore } from "@reduxjs/toolkit";
import colorsSlice from "./colorslice";
import userSlice, { fetchUser } from "./userslice";
import Cookies from 'js-cookie';

const Store = configureStore({
    reducer: {
        colorsSlice,
        userSlice
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export default Store;

const id = Cookies.get('userId');
if (id) {
  Store.dispatch(fetchUser());
}