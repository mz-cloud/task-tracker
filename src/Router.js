import { grommet, Grommet } from "grommet";
import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html, body {
		padding: 0;
		margin: 0;
		font-family: 'Roboto', sans-serif;
	}
	* {
	box-sizing: border-box;
	}
`;

const Router = (props) => {
	return (
		<Grommet theme={grommet}>
			<GlobalStyle />
			{props.children}
		</Grommet>
	);
};

export default Router;
