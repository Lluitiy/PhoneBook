// import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
// import * as yup from 'yup';
import { register } from 'Redux/Auth/operations';
import { useDispatch } from 'react-redux';
import {
	CommonBtn,
	CommonForm,
	CommonHeading,
	CommonInput,
	CommonLabel,
	Section,
} from 'components/App/App.styled';

// const schema = yup.object().shape({
// 	name: yup
// 		.string()
// 		.min(1, 'min: 1 max: 20')
// 		.max(20, 'min: 1 max: 20')
// 		.required('Please fill the field'),
// 	email: yup
// 		.string()
// 		.min(8, 'min: 8 max: 10')
// 		.max(10, 'min: 8 max: 10')
// 		.required('Please fill the field'),
// 	password: yup
// 		.string()
// 		.min(6, 'min:6 max:9')
// 		.max(9, 'min:6 max: 9')
// 		.required('Please fill the field'),
// });

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
			case 'name':
				return setName(value);
			case 'email':
				return setEmail(value);
			case 'password':
				return setPassword(value);

			default:
				return;
		}
	};
	// const initialValues = {
	// 	name: '',
	// 	email: '',
	// 	password: '',
	// };
	const handleSubmit = e => {
		e.preventDefault();
		dispatch(register({ name, email, password }));
		setName('');
		setEmail('');
		setPassword('');
	};
	return (
		// <Formik
		// 	initialValues={initialValues}
		// 	onSubmit={handleSubmit}
		// 	validationSchema={schema}
		// >
		<Section>
			<CommonForm onSubmit={handleSubmit}>
				<CommonHeading>Rigistrate</CommonHeading>
				<CommonLabel>
					<CommonInput
						autoComplete="on"
						type="text"
						name="name"
						onChange={handleChange}
						value={name}
						placeholder="Name"
					/>
				</CommonLabel>
				<CommonLabel>
					<CommonInput
						autoComplete="on"
						type="email"
						name="email"
						onChange={handleChange}
						value={email}
						placeholder="Email"
					/>
				</CommonLabel>
				<CommonLabel>
					<CommonInput
						autoComplete="on"
						type="password"
						name="password"
						onChange={handleChange}
						value={password}
						placeholder="Password"
					/>
				</CommonLabel>
				<CommonBtn type="submit">Register</CommonBtn>
			</CommonForm>
		</Section>
		// </Formik>
	);
};
export default Register;
