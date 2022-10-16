import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AuthSelectors from 'Redux/Auth/AuthSelectors';
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children, redirect }) => {
	const isLoggedIn = useSelector(AuthSelectors.getIsLoggedIn);
	return isLoggedIn ? children : <Navigate to={redirect} />;
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
	children: PropTypes.element,
	redirect: PropTypes.string,
};
