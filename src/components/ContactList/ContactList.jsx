import { CommonBtn, Container, Section } from 'components/App/App.styled';
import Modal from 'components/Modal/Modal';
import Spinner from 'components/Spinner/Spinner';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'Redux/Contacts/ContactsOperations';
import { ContactSelectors } from 'Redux/Contacts/ContactsSelectors';
import {
	ContactListList,
	ContactListItem,
	// ContactsWrapper,
	ContactListName,
	ContactListNumber,
	Message,
} from './ContactList.styled';

export const ContactList = () => {
	const [showModal, setModal] = useState(false);
	const [editId, setEditId] = useState(null);
	const toggleModal = id => {
		setModal(!showModal);
		setEditId(id);
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
				{showModal && <Modal editId={editId} toggleModal={toggleModal} />}
				{contacts.isLoading ? (
					<Spinner />
				) : (
					<ContactListList>
						{filteredContacts?.length ? (
							filteredContacts?.map(({ id, name, number }) => (
								<ContactListItem key={id} id={id}>
									<ContactListName>{name}</ContactListName>
									<ContactListNumber>{number}</ContactListNumber>
									<CommonBtn
										id={id}
										type="button"
										onClick={() => toggleModal(id)}
										disabled={contacts.isLoading}
									>
										Edit
									</CommonBtn>
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
