import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
	display: flex;
	align-items: center;
	font-size: 18px;
	padding: 8px;
	width: 120px;
	gap: 16px;
	border-radius: 4px;
	text-decoration: none;
	color: rgb(0, 0, 0);
	background-color: transparent;
	border: 1px solid black;
	transition: 250ms color ease-in-out, 250ms background-color ease-in-out,
		250ms border ease-in-out, 250ms transform ease-in-out;
	&.active {
		transform: scale(1.17);
		color: #004524;
		background-color: rgb(0, 0, 0);
		border: rgb(0, 0, 0);
		box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
			rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
	}
	:hover:not(.active) {
		background-color: #004524;
	}
`;
