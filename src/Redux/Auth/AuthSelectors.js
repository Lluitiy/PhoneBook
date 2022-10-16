const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getRefresh = state => state.auth.refresh;
const AuthSelectors = {
	getIsLoggedIn,
	getUserName,
	getRefresh,
};

export default AuthSelectors;
