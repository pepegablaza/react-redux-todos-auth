import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	max-width: 140rem;
	margin: 0 auto;
	height: 100%;
`;

export const MainWrapper = styled.main`
	width: 100%;
	min-height: calc(100vh - 6rem);
	margin-top: 6rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

//Logo
export const LogoWrapper = styled.div`
	color: var(--color-white);
	height: 100%;
	display: flex;
	align-items: center;
	font-weight: 700;
	font-size: 1.2rem;
	padding: 1rem;
`;

//VerifyEmail Wrappers

export const VerifyMessageWrapper = styled.div`
	position: absolute;
	bottom: 0;
`;

export const VerifyWrapper = styled.div`
	width: 100%;
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
