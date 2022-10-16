import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { login, logout, register, setCurrentUser } from './operations';
const initialState = {
	user: {
		name: null,
		email: null,
		password: null,
	},
	token: null,
	isLoggedIn: false,
	isLoading: false,
	error: null,
	refresh: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[register.pending](state) {
			state.isLoading = true;
		},
		[register.fulfilled](state, { payload }) {
			state.user = payload.user;
			state.token = payload.token;
			state.isLoading = false;
			state.isLoggedIn = true;
		},
		[register.rejected](state, { payload }) {
			state.isLoading = false;
			state.error = payload;
		},
		[login.pending](state) {
			state.isLoading = true;
		},
		[login.fulfilled](state, { payload }) {
			state.user = payload.user;
			state.token = payload.token;
			state.isLoggedIn = true;
		},
		[login.rejected](state, { payload }) {
			state.isLoading = false;
			state.error = payload;
		},
		[setCurrentUser.pending](state) {
			state.isLoading = true;
			state.refresh = false;
		},
		[setCurrentUser.fulfilled](state, { payload }) {
			state.user = payload;
			state.isLoggedIn = true;
			state.refresh = true;
		},
		[setCurrentUser.rejected](state, { payload }) {
			state.isLoading = false;
			state.error = payload;
			state.refresh = true;
		},
		[logout.pending](state) {
			state.isLoading = true;
		},
		[logout.fulfilled](state, _) {
			state.user.name = null;
			state.user.email = null;
			state.user.password = null;
			state.token = null;
			state.isLoggedIn = false;
		},
		[logout.rejected](state, { payload }) {
			state.isLoading = false;
			state.error = payload;
		},
	},
});

// todo email vovzhynskyyy@gmail.com
// todo pass  12345678p
const authPersistConfig = { key: 'auth', storage, whitelist: ['token'] };
export const persistedAuthReducer = persistReducer(
	authPersistConfig,
	authSlice.reducer
);
