import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from 'Redux/Auth/operations';
import { lazy } from 'react';
import Layout from 'layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
// import LoginPage from 'pages/LoginPage/LoginPage';
// import RegisterPage from 'pages/RegisterPage/RegisterPage';
// import ContactactsPage from 'pages/ContactsPage/ContactsPage';
import AuthSelectors from 'Redux/Auth/AuthSelectors';
import PrivateRoutes from 'components/Private/PrivateRoutes';
import PublicRoutes from 'components/Public/PublicRoutes';

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const ContactactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
export const App = () => {
	const dispatch = useDispatch();
	const refresh = useSelector(AuthSelectors.getRefresh);
	useEffect(() => {
		dispatch(setCurrentUser());
	}, [dispatch]);

	return (
		refresh && (
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						index
						element={
							<PublicRoutes redirect="/home">
								<Navigate to="home" />
							</PublicRoutes>
						}
					/>
					<Route
						path="home"
						element={
							<PublicRoutes>
								<HomePage />
							</PublicRoutes>
						}
					/>
					<Route
						path="login"
						element={
							<PublicRoutes restricted redirect="/">
								<LoginPage />
							</PublicRoutes>
						}
					/>
					<Route
						path="register"
						element={
							<PublicRoutes restricted redirect="/">
								<RegisterPage />
							</PublicRoutes>
						}
					/>
					<Route
						path="contacts"
						element={
							<PrivateRoutes redirect="/login">
								<ContactactsPage />
							</PrivateRoutes>
						}
					/>
				</Route>
				<Route path="*" element={<Navigate to="home" />} />
			</Routes>
		)
	);
};
