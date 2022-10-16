// import { Spinner } from 'components/Spinner/Spinner';
import Spinner from 'components/Spinner/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'Redux/Contacts/ContactsOperations';
import {
	ContactListList,
	ContactListItem,
	ContactListBtn,
	ContactListName,
	ContactListNumber,
	Message,
} from './ContactList.styled';

export const ContactList = () => {
	const { contacts, filter } = useSelector(state => state.contacts);

	const dispatch = useDispatch();

	const filteredContacts = filter
		? contacts.items.filter(contact =>
				contact.name.toLowerCase().includes(filter.toLowerCase())
		  )
		: contacts.items;
	return (
		<>
			{contacts.isLoading ? (
				<Spinner />
			) : (
				<ContactListList>
					{filteredContacts?.length ? (
						filteredContacts.map(({ id, name, number }) => (
							<ContactListItem key={id} id={id}>
								<ContactListName>{name}</ContactListName>
								<ContactListNumber>{number}</ContactListNumber>
								<ContactListBtn
									id={id}
									type="button"
									onClick={() => dispatch(deleteContacts(id))}
									disabled={contacts.isLoading}
								>
									Remove
								</ContactListBtn>
							</ContactListItem>
						))
					) : (
						<Message> You dont have contacts yet</Message>
					)}
				</ContactListList>
			)}
		</>
	);
};
