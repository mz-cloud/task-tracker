import { createSlice } from "@reduxjs/toolkit";

const savedTasks = document.cookie ? JSON.parse(document.cookie).tasks : [];

const slice = createSlice({
	name: "counter",
	initialState: savedTasks,
	reducers: {
		addTask: (state, action) => {
			state.push(action.payload);
		},
		removeTask: (state, action) => {
			state.splice(action.payload, 1);
		},
		clearTasks: () => {
			return [];
		},
	},
});

export default slice.reducer;
export const { addTask, removeTask, clearTasks } = slice.actions;
export const taskSlice = slice;
