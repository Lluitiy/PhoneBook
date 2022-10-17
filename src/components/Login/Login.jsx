// import { Field, Form, Formik } from 'formik';
import {
	CommonBtn,
	CommonForm,
	CommonHeading,
	CommonInput,
	CommonLabel,
	Section,
} from 'components/App/App.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'Redux/Auth/operations';
// import * as yup from 'yup';
// const schema = yup.object().shape({
// 	email: yup
// 		.string()
// 		.min(8, 'min: 8 max: 10')
// 		.max(10, 'min: 8 max: 10')
// 		.required('Please fill the field'),
// 	password: yup.string().min(6, 'min:6 max:9').max(9, 'min:6 max: 9'),
// });

const Login = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const initialValue = {
	// 	email: '',
	// 	password: '',
	// };
	const handleSubmit = e => {
		e.preventDefault();
		dispatch(login({ email, password }));
		setEmail('');
		setPassword('');
	};
	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
			case 'email':
				return setEmail(value);
			case 'password':
				return setPassword(value);

			default:
				return;
		}
	};
	return (
		// <Formik initialValues={initialValue} validationSchema={schema}>
		<Section>
			<CommonForm onSubmit={handleSubmit}>
				<CommonHeading>LogIn</CommonHeading>
				<CommonLabel>
					<CommonInput
						type="email"
						name="email"
						autoComplete="on"
						onChange={handleChange}
						value={email}
						placeholder="Name"
					/>
				</CommonLabel>
				<CommonLabel>
					<CommonInput
						type="password"
						name="password"
						autoComplete="on"
						onChange={handleChange}
						value={password}
						placeholder="password"
					/>
				</CommonLabel>
				<CommonBtn type="submit">Log In</CommonBtn>
			</CommonForm>
		</Section>
		// </Formik>
	);
};
export default Login;
