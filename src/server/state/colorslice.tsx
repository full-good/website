import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: "black",
    backgroundcolor: "white",
    fullgood: {
        color: "white",
        backgroundcolor: "#000030"
    }
}

export const colorsSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
    }
});

export const { } = colorsSlice.actions;
export default colorsSlice.reducer;