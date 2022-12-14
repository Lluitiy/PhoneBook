import { createSlice } from '@reduxjs/toolkit';
import {
	getContacts,
	addContacts,
	deleteContacts,
	editContact,
} from 'Redux/Contacts/ContactsOperations';

const initialContacts = {
	contacts: { items: [], isLoading: false, error: null },
	filter: null,
};

const contactSlice = createSlice({
	name: 'contact',
	initialState: initialContacts,
	reducers: {
		filterContacts(state, action) {
			state.filter = action.payload;
		},
	},
	extraReducers: {
		[getContacts.pending]({ contacts }) {
			contacts.isLoading = true;
		},
		[getContacts.fulfilled]({ contacts }, { payload }) {
			contacts.isLoading = false;
			contacts.error = null;
			contacts.items = payload;
		},
		[getContacts.rejected]({ contacts }, { payload }) {
			contacts.isLoading = false;
			contacts.error = payload;
		},
		[addContacts.pending]({ contacts }) {
			contacts.isLoading = true;
		},
		[addContacts.fulfilled]({ contacts }, { payload }) {
			contacts.isLoading = false;
			contacts.error = null;
			contacts.items = [...contacts.items, payload];
		},
		[addContacts.rejected]({ contacts }, { payload }) {
			contacts.isLoading = false;
			contacts.error = payload;
		},

		[editContact.pending]({ contacts }) {
			contacts.isLoading = true;
		},
		[editContact.fulfilled]({ contacts }, { payload }) {
			contacts.isLoading = false;
			contacts.error = null;
			console.log('contacts', contacts.items);
			console.log('payload', payload);
			contacts.items = contacts.items.map(contact =>
				contact.id === payload.id ? payload : contact
			);
		},
		[editContact.rejected]({ contacts }, { payload }) {
			contacts.isLoading = false;
			contacts.error = payload;
		},

		[deleteContacts.pending]({ contacts }) {
			contacts.isLoading = true;
		},
		[deleteContacts.fulfilled]({ contacts }, { payload }) {
			contacts.isLoading = false;
			contacts.error = null;
			contacts.items = contacts.items.filter(contact => contact.id !== payload);
		},
		[deleteContacts.rejected]({ contacts }, { payload }) {
			contacts.isLoading = false;
			contacts.error = payload;
		},
	},
});

export const contactsReducer = contactSlice.reducer;

export const { filterContacts } = contactSlice.actions;
