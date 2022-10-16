import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AuthSelectors from 'Redux/Auth/AuthSelectors';
import PropTypes from 'prop-types';

const PublicRoutes = ({ children, restricted = false, redirect = '/' }) => {
	const isLoggedIn = useSelector(AuthSelectors.getIsLoggedIn);
	const shouldRedirect = isLoggedIn && restricted;
	return shouldRedirect ? <Navigate to={redirect} /> : children;
};

export default PublicRoutes;
PublicRoutes.propTypes = {
	children: PropTypes.element,
	restricted: PropTypes.bool,
	redirect: PropTypes.string,
};
