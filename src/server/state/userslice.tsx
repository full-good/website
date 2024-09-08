import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import axios from "axios";

const id = Cookies.get('userId');
const http = import.meta.env.VITE_HTTPCALL;
const initialState = {
    status: id===undefined?"DETACHED":"CONNECTED",
    user: id===undefined?{}:async () => (await (axios.get(http + `/user/auth/${id}`))).data
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    }
});

export const { } = userSlice.actions;
export default userSlice.reducer;