import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const ContactsForm = styled(Form)`
	width: 600px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 15px;
	margin: 0px auto;
	padding: 16px;

	border: 1px solid goldenrod;
`;

export const ContactsFormInput = styled(Field)`
	padding: 8px;
	border-radius: 10px;
	border: 2px solid transparent;
	background-color: #131a35;
	color: rgba(17, 201, 29, 0.863);
	transition: 250ms border-color ease-in-out;
	outline: none;
	:hover,
	:focus {
		border: 2px solid rgba(17, 201, 29, 0.863);
	}
`;

export const ErrorMsg = styled(ErrorMessage)`
	color: #131a35;
	font-weight: 500;
	font-size: 18px;
`;

export const ContactsFormLabel = styled.label`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	color: #131a35;
	font-size: 16px;
	font-weight: 500;
	transition: 250ms color ease-in-out;
	:hover,
	:focus {
		color: rgba(17, 201, 29, 0.863);
	}
`;

export const ContactsBtn = styled.button`
	padding: 10px;
	color: rgba(17, 201, 29, 0.863);
	background-color: #131a35;
	outline: none;
	border-radius: 8px;
	border: none;
	transition: color 250ms ease-in-out, background-color 250ms ease-in-out;
	cursor: pointer;
	:hover,
	:focus {
		color: #131a35;
		background-color: rgba(17, 201, 29, 0.863);
	}
`;
