import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavL = styled(NavLink)`
	position: relative;
	display: inline-block;
	padding: 10px 20px;
	color: #008997;
	font-size: 16px;
	text-decoration: none;
	text-transform: uppercase;
	overflow: hidden;
	transition: all 500ms ease-in-out;
	letter-spacing: 4px;
	border-bottom: 2px solid transparent;

	&.active {
		span:nth-of-type(1) {
			position: absolute;
			display: block;
			top: 0;
			left: -100%;
			width: 100%;
			height: 2px;
			background: linear-gradient(90deg, transparent, #008997);
			animation: btn-anim1 1s linear infinite;
			@keyframes btn-anim1 {
				0% {
					left: -100%;
				}
				50%,
				100% {
					left: 100%;
				}
			}
		}
		span:nth-of-type(2) {
			position: absolute;
			display: block;
			top: -100%;
			right: 0;
			width: 2px;
			height: 100%;
			background: linear-gradient(180deg, transparent, #008997);
			animation: btn-anim2 1s linear infinite;
			animation-delay: 0.25s;

			@keyframes btn-anim2 {
				0% {
					top: -100%;
				}
				50%,
				100% {
					top: 100%;
				}
			}
		}
		span:nth-of-type(3) {
			position: absolute;
			display: block;
			bottom: 0;
			right: -100%;
			width: 100%;
			height: 2px;
			background: linear-gradient(270deg, transparent, #008997);
			animation: btn-anim3 1s linear infinite;
			animation-delay: 0.5s;
			@keyframes btn-anim3 {
				0% {
					right: -100%;
				}
				50%,
				100% {
					right: 100%;
				}
			}
		}
		span:nth-of-type(4) {
			position: absolute;
			display: block;
			bottom: -100%;
			left: 0;
			width: 2px;
			height: 100%;
			background: linear-gradient(360deg, transparent, #008997);
			animation: btn-anim4 1s linear infinite;
			animation-delay: 0.75s;
			@keyframes btn-anim4 {
				0% {
					bottom: -100%;
				}
				50%,
				100% {
					bottom: 100%;
				}
			}
		}
	}
	:hover:not(.active) {
		border-bottom: 2px solid #008997;
	}
`;

export const Span = styled.span``;
