import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: "black",
    backgroundcolor: "white",
    fullgood: {
        color: "white",
        backgroundcolor: "#111F2E",
        anothercolor: "#34F5C5",
    },
    fullofhappiness: {
        color: "rgb(138, 118, 5)",
        backgroundcolor: "black",
        anothercolor: "#34F5C5",
    },
    businessmanagement: {
        color: "white",
        backgroundcolor: "black",
        anothercolor: "#34F5C5",
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