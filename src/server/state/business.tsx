import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const http = import.meta.env.VITE_HTTPCALL;
const initialState = {
    Business: [{
        nameDeal: "",
        name: "",
        phone: "",
        mail: "",
        city: "",
        website: "",
        logo: ""
    }],
    loading: true,
    error: null
}

export const businesSlice = createSlice({
    name: 'business',
    initialState,
    reducers: { 
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchBusiness.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchBusiness.fulfilled, (state, action) => {
            state.Business = action.payload;
            state.loading = false;
          })
      }
});

export const { } = businesSlice.actions;
export default businesSlice.reducer;

export const fetchBusiness = createAsyncThunk(
    'deal/fetchUser',
    async () => {
      const response = await axios.get(`${http}/deal`);
      return response.data;
    }
);