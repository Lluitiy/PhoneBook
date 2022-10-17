import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HomeText = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;
`;

export const HomeLink = styled(Link)`
	position: relative;
	display: inline-block;
	padding: 10px 20px;
	color: #0367a6;
	font-size: 24px;
	text-decoration: none;
	text-transform: uppercase;
	overflow: hidden;
	transition: all 500ms ease-in-out;
	letter-spacing: 4px;
	border-bottom: 2px solid transparent;
	:hover,
	:focus {
		span:nth-of-type(1) {
			position: absolute;
			display: block;
			top: 0;
			left: -100%;
			width: 100%;
			height: 2px;
			background: linear-gradient(90deg, transparent, #0367a6);
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
			background: linear-gradient(180deg, transparent, #0367a6);
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
			background: linear-gradient(270deg, transparent, #0367a6);
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
			background: linear-gradient(360deg, transparent, #0367a6);
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
`;
