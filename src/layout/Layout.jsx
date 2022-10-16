import AppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Main } from './Layout.styled';

const Layout = () => {
	return (
		<>
			<Header>
				<AppBar />
			</Header>
			<Main>
				<Suspense fallback={null}>
					<Outlet />
				</Suspense>
			</Main>
		</>
	);
};

export default Layout;
