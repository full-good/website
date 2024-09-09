import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: "black",
    backgroundcolor: "white",
    fullgood: {
        color: "white",
        backgroundcolor: "#000030"
    },
    fullofhappiness: {
        color: "rgb(138, 118, 5)",
        backgroundcolor: "black"
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