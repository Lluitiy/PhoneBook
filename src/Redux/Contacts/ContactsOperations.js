import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const getContacts = createAsyncThunk(
	'contacts/fetchAll',
	async (_, thunkAPI) => {
		try {
			const allContacts = await axios.get(`/contacts`);
			return allContacts.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
export const addContacts = createAsyncThunk(
	'contacts/add',
	async (item, thunkAPI) => {
		try {
			const addedContact = await axios.post(`/contacts`, item);
			return addedContact.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const deleteContacts = createAsyncThunk(
	'contacts/delete',
	async (id, thunkAPI) => {
		try {
			const deletedContact = await axios.delete(`/contacts/${id}`);
			console.log('deletedContact', deletedContact);
			return id;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
