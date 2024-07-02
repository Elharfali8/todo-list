import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    list: [],
    error: null,
    completed: [],
    modalOpen: false,
    text: ''
}


const persistedState = JSON.parse(localStorage.getItem('todoState'));
const mergedInitialState = persistedState ? { ...initialState, ...persistedState } : initialState;

export const todoSlice = createSlice({
    name: 'todo',
    initialState: mergedInitialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: uuidv4(),
                name: action.payload,
                isCompleted: false
            };
            state.list.push(newTask);
            saveState(state);
        },
        completeTask: (state, action) => {
            const task = state.list.find((item) => item.id === action.payload);
            const newList = state.list.filter((task) => task.id !== action.payload);
            task.isCompleted = !task.isCompleted;
            state.list = [...newList, task];
            if (task.isCompleted) {
                state.completed = [...state.completed, task];
            } else {
                state.completed = state.completed.filter((task) => task.id !== action.payload);
            }
            saveState(state);
        },
        deleteTask: (state, action) => {
            const newList = state.list.filter((task) => task.id !== action.payload);
            state.list = newList;
            saveState(state);
        },
        editTask: (state, action) => {
            const { id, name } = action.payload;
            const task = state.list.find((t) => t.id === id);
            if (task) {
                task.name = name;
            }
            saveState(state);
        }
    }
});


const saveState = (state) => {
    localStorage.setItem('todoState', JSON.stringify(state));
};

export const { addTask, completeTask, deleteTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;
