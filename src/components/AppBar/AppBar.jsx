import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import AuthSelectors from 'Redux/Auth/AuthSelectors';
const AppBar = () => {
	const isLoggedIn = useSelector(AuthSelectors.getIsLoggedIn);
	return (
		<>
			<Navigation />
			{isLoggedIn ? <UserMenu /> : <AuthNav />}
		</>
	);
};
export default AppBar;
