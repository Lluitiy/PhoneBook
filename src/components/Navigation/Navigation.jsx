import { useSelector } from 'react-redux';
import AuthSelectors from 'Redux/Auth/AuthSelectors';
import { NavL, Span } from 'components/AuthNav/AuthNav.styled';
const Navigation = () => {
	const isLoggedIn = useSelector(AuthSelectors.getIsLoggedIn);
	return (
		<>
			<nav style={{ display: 'flex', gap: `15px` }}>
				<NavL to={'home'} key={'Home'}>
					<Span></Span>
					<Span></Span>
					<Span></Span>
					<Span></Span>
					Home
				</NavL>
				{isLoggedIn ? (
					<NavL to={'contacts'} key={'Contacts'}>
						<Span></Span>
						<Span></Span>
						<Span></Span>
						<Span></Span>
						Contacts
					</NavL>
				) : null}
			</nav>
		</>
	);
};
export default Navigation;
