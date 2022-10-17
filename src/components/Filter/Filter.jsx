import {
	CommonHeading,
	CommonInput,
	CommonLabel,
	Container,
	Section,
} from 'components/App/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'Redux/Contacts/ContactsSlice';
import { FilterWrapper } from './Filter.styled';
export const Filter = () => {
	const dispatch = useDispatch();
	const contactToFind = useSelector(state => state.filter);
	const filter = name => dispatch(filterContacts(name));
	return (
		<Section>
			<Container>
				<FilterWrapper>
					<CommonHeading>Contacts</CommonHeading>
					<CommonLabel>
						Find contacts by Name
						<CommonInput
							type="text"
							value={contactToFind}
							onChange={e => filter(e.target.value)}
							placeholder="Enter the Name"
						/>
					</CommonLabel>
				</FilterWrapper>
			</Container>
		</Section>
	);
};
