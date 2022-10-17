import { CommonHeading, Container, Section } from 'components/App/App.styled';
import { Span } from 'components/AuthNav/AuthNav.styled';
import { HomeText, HomeLink } from './Home.styled';

const Home = () => {
	return (
		<Section>
			<Container>
				<CommonHeading>
					Welcome to the home page of your Phone Book
				</CommonHeading>
				<HomeText>
					In order to check your contacts please follow the:
					<HomeLink to="/contacts">
						<Span></Span>
						<Span></Span>
						<Span></Span>
						<Span></Span>
						link
					</HomeLink>
				</HomeText>
			</Container>
		</Section>
	);
};
export default Home;
