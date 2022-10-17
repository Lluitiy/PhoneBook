import { Container, Section } from 'components/App/App.styled';

const Spinner = () => {
	return (
		<Section>
			<Container>
				<div className="ring">
					Loading
					<span className="spann"></span>
				</div>
			</Container>
		</Section>
	);
};

export default Spinner;
