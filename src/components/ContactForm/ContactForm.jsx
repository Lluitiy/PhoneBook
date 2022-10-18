import { useDispatch, useSelector } from 'react-redux';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Formik } from 'formik';
import {
	ContactsForm,
	ContactsFormInput,
	ContactsFormLabel,
	ErrorMsg,
} from './ContactForm.styled';
import * as yup from 'yup';
import { addContacts } from 'Redux/Contacts/ContactsOperations';
import { CommonBtn, CommonHeading } from 'components/App/App.styled';

const schema = yup.object().shape({
	name: yup
		.string()
		.min(1, 'min: 1 max: 20')
		.max(20, 'min: 1 max: 20')
		.required('Please fill the field'),
	number: yup
		.string()
		.min(8, 'min: 8 max: 10')
		.max(10, 'min: 8 max: 10')
		.required('Please fill the field'),
});

export const ContactForm = () => {
	const addedContact = useSelector(state => state.contacts.contacts);
	const dispatch = useDispatch();
	if (addedContact.error) {
		alert('Ваш комп взломан переведите 10000$ на карту 7892 4552 1124 0228');
	}

	const initialValues = {
		name: '',
		number: '',
	};

	const findContact = name => {
		return addedContact.items?.find(contact => {
			return contact.name.toLowerCase() === name.toLowerCase();
		});
	};

	const handleFormSubmit = (values, { resetForm }) => {
		if (findContact(values.name)) {
			Report.failure(
				'This contact already existst',
				'Please make sure you are adding the new contact',
				'Ckeck again'
			);
			resetForm();
			return;
		}
		const newContact = {
			name: values.name.trim(),
			number: values.number.trim(),
		};
		dispatch(addContacts(newContact));
		resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleFormSubmit}
			validationSchema={schema}
		>
			<ContactsForm>
				<CommonHeading>Phone Book</CommonHeading>
				<ContactsFormLabel>
					<ContactsFormInput type="text" name="name" placeholder="Name" />
				</ContactsFormLabel>
				<ErrorMsg name="name" component="div" />
				<ContactsFormLabel>
					<ContactsFormInput type="tel" name="number" placeholder="Number" />
				</ContactsFormLabel>
				<ErrorMsg name="number" component="div" />
				<CommonBtn type="submit" disabled={addedContact.isLoading}>
					{addedContact.isLoading ? 'Please Wait' : 'Add contact'}
				</CommonBtn>
			</ContactsForm>
		</Formik>
	);
};
