import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    list: [],
    error: null
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {}
})


export default todoSlice.reducer