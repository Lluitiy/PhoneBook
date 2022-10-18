import styled from '@emotion/styled';

export const ContactListList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
	align-items: center;

	list-style-type: none;
	padding: 0px 10px;
	margin: 0px auto;
	width: 700px;
`;

export const ContactListItem = styled.li`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.9rem 2rem;
	font-size: 0.8rem;
	border-radius: 20px;
	border-bottom: 2px solid #008997;
	background-color: rgba(255, 255, 255, 0.7);
`;
export const ContactsWrapper = styled.div`
	/* display: flex;
	align-items: center;
	flex-wrap: wrap;
	padding: 0.9rem 2rem;
	font-size: 0.8rem;
	border-radius: 20px;
	border-bottom: 2px solid #008997;
	background-color: rgba(255, 255, 255, 0.7);

	width: 300px; */
`;
export const ContactListName = styled.p`
	width: 35%;
	font-size: 16px;
	font-weight: 500;
	color: #131a35;
`;

export const ContactListNumber = styled.p`
	width: 35%;
	font-size: 16px;
	font-weight: 500;
	color: #131a35;
`;

export const Message = styled.h2`
	text-align: center;
	padding: 2rem 4rem;
	border-radius: 20px;
	background-color: rgba(255, 255, 255, 0.7);
`;
