import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    color: "black",
    backgroundcolor: "white"
}

export const colorsSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        changeColors: (state, actions: PayloadAction<{ color: string; backgroundcolor: string }>) => {
            state.color = actions.payload.color 
            state.backgroundcolor = actions.payload.backgroundcolor 
        },     
    }
});

export const { changeColors} = colorsSlice.actions;
export default colorsSlice.reducer;