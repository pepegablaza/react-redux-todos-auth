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

export const VerifyContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	justify-content: center;
`;

export const DeleteTodoWrapper = styled.div`
	margin: 1rem 0rem;
	font-size: 2rem;
	color: var(--color-white);
	text-align: center;
	word-break: break-word;
	overflow: hidden;
	text-transform: capitalize;
`;
export const TodoWrapper = styled.div`
	width: 100%;
	position: relative;
	padding: 4rem 3rem;
	background-color: var(--color-mainLighter);
	box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
	margin-bottom: 3.5rem;
	border-radius: 0.5rem;
	font-size: 3rem;
	font-weight: 700;
	text-align: center;
	color: var(--color-white);
	text-transform: capitalize;
`;

export const TodosMainContainer = styled.div`
	max-width: 1500px;
	width: 75%;
	display: flex;
	flex-direction: column;
`;

export const TodosNavigationContainer = styled.div`
	display: flex;
	padding: 1rem;
	justify-content: space-around;
`;

export const TodosContainer = styled.div`
	max-width: 1200px;
	width: 90%;
	margin: 0 auto;
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const TodoContainer = styled.div`
        font-size:2rem;
		font-weight:bold;
		text-transform:capitalize;
        padding:2rem;
		background:  #fff;
		word-break:break-word;
		overflow:hidden;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		height:200px;
		box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
		transition: all 0.3s linear;
		border-radius: 1rem;
	}
`;
