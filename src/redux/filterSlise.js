import { createSlice } from "@reduxjs/toolkit";

const initialFilter = "";

const filterSlice = createSlice({
    name: "filter",
    initialState: initialFilter,
    reducers: {
        updFilter(state, action){return state = action.payload},
    }
});

export const { updFilter } = filterSlice.actions;
export default filterSlice.reducer;