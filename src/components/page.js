import React, { Suspense } from "react";
import { AtomSpinner } from "react-epic-spinners";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";
import Navbar from "./navbar";

const StyledSpinner = styled(AtomSpinner)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Spinner = () => {
	const { width, height } = useWindowSize();
	return <StyledSpinner size={Math.min(width * 0.5, height * 0.5)} color="purple" />;
};

export const DisplayPage = (props) => {
	const { CurrentPage } = props;
	return (
		<>
			<Navbar />
			<Suspense fallback={<Spinner />}>{CurrentPage}</Suspense>
		</>
	);
};
