import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<p>Copyright &copy; 2021</p>
			<Link to="/about">About</Link>
			<p></p>
			<Link to='/completed'>Completed</Link>
		</footer>
	);
};

export default Footer;
