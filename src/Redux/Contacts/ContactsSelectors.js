const getIsLoading = state => state.contacts.contacts.isLoading;
const getStates = state => state.contacts;

export const ContactSelectors = {
	getIsLoading,
	getStates,
};
