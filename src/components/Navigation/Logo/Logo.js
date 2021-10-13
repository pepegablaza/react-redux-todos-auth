import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoWrapper = styled.div`
	color: var(--color-white);
	height: 100%;
	display: flex;
	align-items: center;
	font-weight: 700;
	font-size: 2.5rem;
	padding: 1rem;
	text-decoration: none;
`;

const Logo = () => {
	return (
		<Link to="/">
			<LogoWrapper>Todo App</LogoWrapper>
		</Link>
	);
};

export default Logo;
