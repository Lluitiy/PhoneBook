import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},
	unset() {
		axios.defaults.headers.common.Authorization = '';
	},
};

export const register = createAsyncThunk('auth/register', async credentials => {
	try {
		const { data } = await axios.post('/users/signup', credentials);
		token.set(data.token);
		return data;
	} catch (error) {
		console.log('error', error);
	}
});
export const login = createAsyncThunk('auth/login', async credentials => {
	try {
		const { data } = await axios.post('/users/login', credentials);
		console.log('data', data.token);
		token.set(data.token);
		return data;
	} catch (error) {
		console.log('error', error);
	}
});
export const setCurrentUser = createAsyncThunk(
	'auth/currentUser',
	async (_, thunkAPI) => {
		const state = thunkAPI.getState();
		const persistedToken = state.auth.token;
		if (!persistedToken) {
			console.log('net tokena');
			return thunkAPI.rejectWithValue(3);
		}
		token.set(persistedToken);
		try {
			const { data } = await axios.get('/users/current');
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
export const logout = createAsyncThunk('auth/logout', async () => {
	try {
		const { data } = await axios.post('/users/logout');
		token.unset();
		return data;
	} catch (error) {
		console.log('error', error);
	}
});
