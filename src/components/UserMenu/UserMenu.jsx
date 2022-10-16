import { useDispatch, useSelector } from 'react-redux';
import AuthSelectors from 'Redux/Auth/AuthSelectors';
import { logout } from 'Redux/Auth/operations';

const UserMenu = () => {
	const dispatch = useDispatch();
	const name = useSelector(AuthSelectors.getUserName);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<img
				src="https://i.pinimg.com/originals/f7/d5/c9/f7d5c98dba786027c44bca13ebf97ded.jpg"
				alt="user avatar"
				width={`64px`}
				height={`64px`}
				style={{ borderRadius: `50%` }}
			/>
			<span>Hello {name}</span>
			<button type="button" onClick={() => dispatch(logout())}>
				LogOut
			</button>
		</div>
	);
};
export default UserMenu;
