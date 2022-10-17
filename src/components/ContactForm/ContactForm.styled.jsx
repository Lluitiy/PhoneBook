import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const ContactsForm = styled(Form)`
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

export const ContactsFormInput = styled(Field)`
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

export const ErrorMsg = styled(ErrorMessage)`
	color: #131a35;
	font-weight: 500;
	font-size: 18px;
`;

export const ContactsFormLabel = styled.label`
	width: 300px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	color: #131a35;
	font-size: 16px;
	font-weight: 500;
	transition: 250ms color ease-in-out;
	:hover,
	:focus {
		color: #0367a6;
	}
`;

export const ContactsBtn = styled.button`
	padding: 10px;
	color: #0367a6;
	background-color: #131a35;
	outline: none;
	border-radius: 8px;
	border: none;
	transition: color 250ms ease-in-out, background-color 250ms ease-in-out;
	cursor: pointer;
	:hover,
	:focus {
		color: #131a35;
		background-color: #0367a6;
	}
`;
