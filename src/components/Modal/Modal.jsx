import {
	CommonBtn,
	CommonForm,
	CommonInput,
	CommonLabel,
	CommonWorkBtn,
	Container,
	Section,
} from 'components/App/App.styled';
import { CloseIcon, EditIcon } from 'components/Services/Icons/Icons.styled';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { editContact } from 'Redux/Contacts/ContactsOperations';
import { Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ user, toggleModal }) => {
	const dispatch = useDispatch();
	const [name, setName] = useState(user.name);
	const [number, setNumber] = useState(user.number);

	useEffect(() => {
		const handleKeyDown = e => {
			if (e.code === 'Escape') {
				console.log('first');
				toggleModal();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [toggleModal]);

	const toggleOverlay = e => {
		if (e.target === e.currentTarget) {
			toggleModal();
		}
		return;
	};

	const updateContact = e => {
		e.preventDefault();
		if (!name && !number) {
			alert('All fields must be filled');
			return;
		}
		dispatch(editContact({ id: user.id, name, number }));
		e.target.reset();
	};
	return createPortal(
		<Overlay id="overlay" onClick={toggleOverlay}>
			<Section>
				<Container>
					<CommonForm
						onSubmit={updateContact}
						style={{ backgroundColor: 'white' }}
					>
						<CommonWorkBtn onClick={toggleModal} type="button">
							<CloseIcon />
						</CommonWorkBtn>
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
						<CommonBtn type="submit">
							EDIT <EditIcon />
						</CommonBtn>
					</CommonForm>
				</Container>
			</Section>
		</Overlay>,

		modalRoot
	);
};

export default Modal;
