import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import axios from "axios";

const id = Cookies.get('userId');
const http = import.meta.env.VITE_HTTPCALL;
const initialState = {
    status: id===undefined?"DETACHED":"CONNECTED",
    user: {
        name: "אורח"
    },
    loading: true,
    error: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: { 
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchUser.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.status = 'CONNECTED';
            state.loading = false;
          })
      }
});

export const { } = userSlice.actions;
export default userSlice.reducer;

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
      const response = await axios.get(`${http}/user/auth/${id}`);
      return response.data;
    }
  );