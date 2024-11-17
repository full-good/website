import { configureStore } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import colorsSlice from "./colorslice";
import userSlice, { fetchUser } from "./userslice"
import businesSlice, { fetchBusiness } from "./business";

const Store = configureStore({
    reducer: {
        colorsSlice,
        userSlice,
        businesSlice
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export default Store;

const id = Cookies.get('userId');
if (id) {
  Store.dispatch(fetchUser());
}
Store.dispatch(fetchBusiness());