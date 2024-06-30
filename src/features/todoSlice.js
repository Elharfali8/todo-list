import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    list: [],
    error: null,
    completed: []
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
        },
        completeTask: (state, action) => {
            const task = state.list.find((item) => item.id === action.payload)
            const newList = state.list.filter((task) => task.id !== action.payload)
            task.isCompleted = !task.isCompleted
            state.list = [...newList, task]
            if (task.isCompleted) {
                state.completed = [...state.completed, task]
            } else (
                state.completed = state.completed.filter((task) => task.id !== action.payload)
            )
        }
    }
})


export const {addTask, completeTask} = todoSlice.actions
export default todoSlice.reducer