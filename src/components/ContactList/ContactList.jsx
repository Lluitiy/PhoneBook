import { CommonWorkBtn, Container, Section } from 'components/App/App.styled';
import Modal from 'components/Modal/Modal';
import Spinner from 'components/Spinner/Spinner';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'Redux/Contacts/ContactsOperations';
import { ContactSelectors } from 'Redux/Contacts/ContactsSelectors';
import {
	ContactListList,
	ContactListItem,
	ContactListName,
	ContactListNumber,
	Message,
} from './ContactList.styled';
import { DeleteIcon, EditIcon } from 'components/Services/Icons/Icons.styled';

export const ContactList = () => {
	const [showModal, setModal] = useState(false);
	const [user, setUSer] = useState(null);

	const toggleModal = user => {
		setModal(!showModal);
		setUSer(user);
	};
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
				{showModal && <Modal user={user} toggleModal={toggleModal} />}
				{contacts.isLoading ? (
					<Spinner />
				) : (
					<ContactListList>
						{filteredContacts?.length ? (
							filteredContacts?.map(({ id, name, number }) => (
								<ContactListItem key={id} id={id}>
									<ContactListName>{name}</ContactListName>
									<ContactListNumber>{number}</ContactListNumber>
									<CommonWorkBtn
										id={id}
										type="button"
										onClick={() => toggleModal({ id, name, number })}
										disabled={contacts.isLoading}
									>
										<EditIcon />
									</CommonWorkBtn>
									<CommonWorkBtn
										id={id}
										type="button"
										onClick={() => dispatch(deleteContacts(id))}
										disabled={contacts.isLoading}
									>
										<DeleteIcon />
									</CommonWorkBtn>
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
