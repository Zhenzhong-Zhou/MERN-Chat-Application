import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../api";

const NavBar = () => {
	const auth = useSelector(state => state.auth.currentUser);
	const dispatch = useDispatch();
	return (
		<div>
			<h4>{auth.username}</h4>
			<span onClick={() => logout(dispatch,{auth})}
			style={{cursor: "pointer", backgroundColor: "red", color: "white", padding: "10px"}}
			>logout</span>
		</div>
	);
};

export default NavBar;