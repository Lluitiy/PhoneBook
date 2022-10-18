const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth?.user?.name;

const getRefresh = state => state.auth.refresh;

const getToken = state => state.auth.token;
const AuthSelectors = {
	getIsLoggedIn,
	getUserName,
	getRefresh,
	getToken,
};

export default AuthSelectors;
