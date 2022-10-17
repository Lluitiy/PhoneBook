import styled from '@emotion/styled';

export const Section = styled.section`
	padding: 24px 0px;
`;

export const Container = styled.div`
	width: 1200px;
	box-sizing: border-box;
	margin: 0px auto;
	padding: 0px 15px;
`;

export const CommonBtn = styled.button`
	background-color: #0367a6;
	background-image: linear-gradient(90deg, #0367a6 0%, #008997 74%);
	border-radius: 20px;
	border: 1px solid #0367a6;
	color: #e9e9e9;
	cursor: pointer;
	font-size: 0.8rem;
	font-weight: bold;
	letter-spacing: 0.1rem;
	padding: 0.9rem 4rem;
	text-transform: uppercase;
	transition: transform 80ms ease-in;

	:active {
		transform: scale(0.95);
	}
`;

export const CommonForm = styled.form`
	width: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 15px;
	margin: 0px auto;
	padding: 64px 16px;
	background-color: rgba(255, 255, 255, 0.5);
	border-radius: 25px;
`;

export const CommonInput = styled.input`
	background-color: #f6f6f6;
	border: none;
	color: #131a35;
	padding: 15px 60px 15px 15px;
	text-decoration: none;
	display: inline-block;
	font-size: 18px;
	-webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
	box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
	-webkit-border-radius: 5px 5px 5px 5px;
	border-radius: 5px 5px 5px 5px;
	border-bottom: 2px solid transparent;

	-webkit-transition: all 250ms ease-in-out;
	-moz-transition: all 250ms ease-in-out;
	-ms-transition: all 250ms ease-in-out;
	-o-transition: all 250ms ease-in-out;
	transition: all 250ms ease-in-out;

	:hover,
	:focus {
		outline: none;
		border-bottom: 2px solid #5fbae9;
		background-color: #f6f6f6;
	}
	:active {
		border-bottom: 2px solid #5fbae9;
		-moz-transform: scale(0.95);
		-webkit-transform: scale(0.95);
		-o-transform: scale(0.95);
		-ms-transform: scale(0.95);
		transform: scale(0.95);
	}
`;

export const CommonLabel = styled.label`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 16px;
	color: #0367a6;
	margin: 0px auto;
	width: 500px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	color: #131a35;
	font-size: 18px;
	font-weight: 500;
	transition: 250ms color ease-in-out;
	:hover,
	:focus {
		color: #0367a6;
	}
`;

export const CommonHeading = styled.h2`
	font-size: 18px;
	color: #0367a6;
	margin-bottom: 16px;
	text-align: center;
`;
