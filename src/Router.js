import { grommet, Grommet } from "grommet";
import React from "react";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import AppStore from "./state/store";

const GlobalStyles = createGlobalStyle`
	html,
	body {
		padding: 0;
		margin: 0;
		font-family: "Roboto", sans-serif;
	}
`;

const Router = (props) => {
	return (
		<Grommet theme={grommet}>
			<GlobalStyles />
			<Provider store={AppStore}>{props.children}</Provider>
		</Grommet>
	);
};

export default Router;
