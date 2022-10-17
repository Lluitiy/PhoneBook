import { Container, Section } from 'components/App/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import Spinner from 'components/Spinner/Spinner';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'Redux/Contacts/ContactsOperations';
import { ContactSelectors } from 'Redux/Contacts/ContactsSelectors';

const ContactactsPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getContacts());
	}, [dispatch]);
	const isLoading = useSelector(ContactSelectors.getIsLoading);
	console.log('isLoading', isLoading);
	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<Section>
					<Container>
						<ContactForm />
						<Filter />
						<ContactList />
					</Container>
				</Section>
			)}
		</>
	);
};

export default ContactactsPage;
