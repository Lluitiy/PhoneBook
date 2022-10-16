import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthSelectors from 'Redux/Auth/AuthSelectors';
const Navigation = () => {
	const isLoggedIn = useSelector(AuthSelectors.getIsLoggedIn);
	return (
		<>
			<nav style={{ display: 'flex', gap: `15px` }}>
				<NavLink to={'home'} key={'Home'}>
					Home
				</NavLink>
				{isLoggedIn ? (
					<NavLink to={'contacts'} key={'Contacts'}>
						Contacts
					</NavLink>
				) : null}
			</nav>
		</>
	);
};
export default Navigation;
