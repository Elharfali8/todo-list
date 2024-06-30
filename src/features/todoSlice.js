import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    list: [],
    error: null
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: uuidv4(),
                name: action.payload,
                isCompleted: false
            };
            state.list.push(newTask);
        }
    }
})


export const {addTask} = todoSlice.actions
export default todoSlice.reducer