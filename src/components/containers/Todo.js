import styled from "styled-components";

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

export const DeleteTodoContainer = styled.div`
	margin: 1rem 0rem;
	font-size: 2rem;
	color: var(--color-white);
	text-align: center;
	text-align: left;
`;
