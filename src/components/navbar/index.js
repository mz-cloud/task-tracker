import { Box, Nav } from "grommet";
import { normalizeColor } from "grommet/utils";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RouteLinks, RouteNames } from "./data";

const StyledLink = styled(Link)`
	cursor: pointer;
	text-decoration: none;
	position: relative;
	font-weight: 500;

	color: ${({ theme }) => normalizeColor("control", theme)};
	&::before {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		bottom: 0px;
		height: 1.5px;
		width: 0;
		background: ${({ theme }) => normalizeColor("control", theme)};
		transition: width 150ms linear;
	}
	&:hover::before {
		width: 100%;
	}
`;

const NavLink = (props) => {
	const { to, children } = props;
	return (
		<StyledLink key={props.id} to={to} replace>
			{children}
		</StyledLink>
	);
};

const Navbar = () => {
	return (
		<Nav
			direction="row"
			background="brand"
			pad={{ horizontal: "large", vertical: "small" }}
			margin={{ bottom: "20px" }}
		>
			<Box>Task Manager</Box>
			<Box margin={{ horizontal: "auto" }} height={0} />
			{RouteNames.map((link, index) => (
				<NavLink key={index} to={RouteLinks[index]}>
					{link}
				</NavLink>
			))}
		</Nav>
	);
};

export default Navbar;
