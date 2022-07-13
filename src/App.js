import React from "react";
import Navbar from "./components/navbar";
import TasksPage from "./pages/tasks";

const App = () => {
	return (
		<div>
			<Navbar />
			<TasksPage />
		</div>
	);
};

export default App;
