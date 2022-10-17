// import { Spinner } from 'components/Spinner/Spinner';
import { CommonBtn, Container, Section } from 'components/App/App.styled';
import Spinner from 'components/Spinner/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'Redux/Contacts/ContactsOperations';
import { ContactSelectors } from 'Redux/Contacts/ContactsSelectors';
import {
	ContactListList,
	ContactListItem,
	ContactsWrapper,
	ContactListName,
	ContactListNumber,
	Message,
} from './ContactList.styled';

export const ContactList = () => {
	const { contacts, filter } = useSelector(ContactSelectors.getStates);

	const dispatch = useDispatch();

	const filteredContacts = filter
		? contacts.items.filter(contact =>
				contact.name.toLowerCase().includes(filter.toLowerCase())
		  )
		: contacts.items;
	return (
		<Section>
			<Container>
				{contacts.isLoading ? (
					<Spinner />
				) : (
					<ContactListList>
						{filteredContacts?.length ? (
							filteredContacts.map(({ id, name, number }) => (
								<ContactListItem key={id} id={id}>
									<ContactsWrapper>
										<ContactListName>{name}</ContactListName>
										<ContactListNumber>{number}</ContactListNumber>
									</ContactsWrapper>
									<CommonBtn
										id={id}
										type="button"
										onClick={() => dispatch(deleteContacts(id))}
										disabled={contacts.isLoading}
									>
										Remove
									</CommonBtn>
								</ContactListItem>
							))
						) : (
							<Message> You dont have contacts yet</Message>
						)}
					</ContactListList>
				)}
			</Container>
		</Section>
	);
};
