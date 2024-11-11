import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    webmind: {
        color: "white",
        backgroundcolor: "#111F2E",
        anothercolor: "#34F5C5",
    },
    happiness: {
        color: "#F2E1D2", // #FEEEC4
        backgroundcolor: "#BA8230",
        anothercolor: "black",
    },
    business: {
        color: "black",
        backgroundcolor: "white",
        anothercolor: "#BD00FF",
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