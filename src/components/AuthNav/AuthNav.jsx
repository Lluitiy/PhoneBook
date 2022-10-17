import { NavL, Span } from './AuthNav.styled';

const AuthNavi = [
	{ href: 'login', text: 'LogIn' },
	{ href: 'register', text: 'Register' },
];

const AuthNav = () => {
	return (
		<>
			<div style={{ display: 'flex', gap: `15px` }}>
				{AuthNavi.map(({ href, text }) => (
					<NavL to={href} key={text}>
						<Span></Span>
						<Span></Span>
						<Span></Span>
						<Span></Span>
						{text}
					</NavL>
				))}
			</div>
		</>
	);
};

export default AuthNav;
