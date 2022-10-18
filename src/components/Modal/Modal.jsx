import {
	CommonBtn,
	CommonForm,
	CommonInput,
	CommonLabel,
	Container,
	Section,
} from 'components/App/App.styled';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { editContact } from 'Redux/Contacts/ContactsOperations';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ editId, toggleModal }) => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const contactToEdit = {
		name: name,
		number: number,
	};
	const updateContact = e => {
		e.preventDefault();
		dispatch(editContact({ id: editId, name, number }));
		e.target.reset();
	};
	console.log('contactToEdit', contactToEdit);
	return createPortal(
		// <Overlay onClick={onClose}>
		// 	<ModalImg src={largeImage} alt="" width="900" height="700" />
		// </Overlay>
		<Section style={{ backgroundColor: 'grey' }}>
			<Container style={{ backgroundColor: 'white' }}>
				<CommonBtn onClick={toggleModal} type="button">
					Close
				</CommonBtn>
				<CommonForm onSubmit={updateContact}>
					<CommonLabel>
						<CommonInput
							type="text"
							placeholder="name"
							onChange={e => setName(e.target.value)}
							name="name"
							value={name}
						/>
					</CommonLabel>
					<CommonLabel>
						<CommonInput
							type="tel"
							placeholder="tel"
							name="tel"
							onChange={e => setNumber(e.target.value)}
							value={number}
						/>
					</CommonLabel>
					<CommonBtn type="submit">PATCH</CommonBtn>
				</CommonForm>
			</Container>
		</Section>,
		modalRoot
	);
};

export default Modal;
