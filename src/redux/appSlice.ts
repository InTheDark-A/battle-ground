import {createSlice} from "@reduxjs/toolkit";


const initialState = {

}



export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        // changeFilterFileName(state, action: PayloadAction<Array<string> | null | undefined>) {
        //     state.form.fileName = action.payload;
        // },

    },
    extraReducers: {
        // [fetchFiles.fulfilled.type]:(state, action:PayloadAction) => {
        //     state.some = action.payload;
        // },
        // [fetchFiles.pending.type]:(state, action:PayloadAction) => {
        //     state.some = action.payload;
        // },
        // [fetchFiles.rejected.type]:(state, action:PayloadAction) => {
        //     state.some = action.payload
        // },
    }
});


export default appSlice.reducer;