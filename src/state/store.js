import { configureStore } from "@reduxjs/toolkit";
import task from "./reducers/task.reducer";

const AppStore = configureStore({
	reducer: {
		tasks: task,
	},
});

export default AppStore;
export { addTask, clearTasks, removeTask } from "./reducers/task.reducer";
AppStore.subscribe(() => (document.cookie = JSON.stringify(AppStore.getState())));
