import React, { lazy } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { DisplayPage } from "./components/page";

const HomePage = lazy(() => import("./pages/home"));
const AboutPage = lazy(() => import("./pages/about"));
const TasksPage = lazy(() => import("./pages/tasks"));

const App = () => {
	return (
		<HashRouter>
			<Routes>
				<Route index element={<DisplayPage CurrentPage={<HomePage />} />} />
				<Route path="about" element={<DisplayPage CurrentPage={<AboutPage />} />} />
				<Route path="tasks" element={<DisplayPage CurrentPage={<TasksPage />} />} />
			</Routes>
		</HashRouter>
	);
};

export default App;
