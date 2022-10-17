import { CommonBtn } from 'components/App/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import AuthSelectors from 'Redux/Auth/AuthSelectors';
import { logout } from 'Redux/Auth/operations';
import {
	Wrapper,
	UserAvatar,
	UserName,
	UserNameWrapper,
} from './UserMenu.styled';

const UserMenu = () => {
	const dispatch = useDispatch();
	const name = useSelector(AuthSelectors.getUserName);

	return (
		<Wrapper>
			<UserAvatar
				src="https://i.pinimg.com/originals/f7/d5/c9/f7d5c98dba786027c44bca13ebf97ded.jpg"
				alt="user avatar"
				width="56px"
				height="56px"
			/>
			<UserNameWrapper>
				Hello <UserName>{name}</UserName>
			</UserNameWrapper>
			<CommonBtn type="button" onClick={() => dispatch(logout())}>
				LogOut
			</CommonBtn>
		</Wrapper>
	);
};
export default UserMenu;
