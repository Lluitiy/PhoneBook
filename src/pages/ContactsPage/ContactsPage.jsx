import { Container, Section } from 'components/App/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Heading, SecondHeading } from './ContactsPage.styled';

const ContactactsPage = () => {
	return (
		<Section>
			<Container>
				<Heading>PHONE BOOK</Heading>
				<ContactForm />
				<SecondHeading>Contacts</SecondHeading>
				<Filter />
				<ContactList />
			</Container>
		</Section>
	);
};

export default ContactactsPage;
