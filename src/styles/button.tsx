import styled from 'styled-components';

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	min-height: 45px;
	min-width: 90px;

	padding: 0 15px;

	border: none;
	outline: none;
	cursor: pointer;

	font: inherit;
	font-size: 12px;

	background: #333;
	color: white;

	transition: 0.5s;

	&:hover {
		color: #333;
		background: #ccc;
		font-weight: bold;
	}
`;
export const FeatureButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	min-height: 45px;
	min-width: 90px;

	padding: 0 15px;

	border: none;
	outline: none;
	cursor: pointer;

	font: inherit;
	font-size: 12px;
`;
