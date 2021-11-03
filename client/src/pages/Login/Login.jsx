import {useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {login} from "../../api";

const Login = () => {
	const [username, setUsername] = useState("");
	// const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const history = useHistory();

	const sign_in = (e) => {
		e.preventDefault();
		login(dispatch, {username, password});
		history.push("/");
	};

	return (
		<div>
			<h3>Login</h3>
			<input type={"text"} placeholder={"Username"} onChange={event => setUsername(event.target.value)}/>
			{/*<input type={"text"} placeholder={"Email"} onChange={event => setEmail(event.target.value)}/>*/}
			<input type={"password"} placeholder={"Password"} onChange={event => setPassword(event.target.value)}/>
			<button onClick={sign_in}>Login</button>
		</div>
	);
};

export default Login;