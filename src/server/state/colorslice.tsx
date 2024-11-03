import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: "black",
    backgroundcolor: "white",
    anothercolor: "#34F5C5",
    fullgood: {
        color: "white",
        backgroundcolor: "#000030",
        anothercolor: "#34F5C5",
    },
    fullofhappiness: {
        color: "rgb(138, 118, 5)",
        backgroundcolor: "black"
    },
    businessmanagement: {
        color: "white",
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