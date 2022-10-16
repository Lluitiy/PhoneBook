import { NavLink } from 'react-router-dom';

const AuthNavi = [
	{ href: 'login', text: 'LogIn' },
	{ href: 'register', text: 'Register' },
];

const AuthNav = () => {
	return (
		<>
			<div style={{ display: 'flex', gap: `15px` }}>
				{AuthNavi.map(({ href, text }) => (
					<NavLink to={href} key={text}>
						{text}
					</NavLink>
				))}
			</div>
		</>
	);
};

export default AuthNav;
