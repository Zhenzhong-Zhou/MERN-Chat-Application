import {useState} from "react";
import {useHistory} from "react-router-dom";
import {axiosUser} from "../../api";

const Register = ({socket}) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	const register = async (e) => {
		e.preventDefault();
		if (username !== "" && email !== "" && password !== "") {
			const user = {
				username,
				email,
				password
			};
			try {
				await axiosUser.post("auth/register", user);
				history.push("/login");
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div>
			<h3>Register An Account</h3>
			<input type={"text"} placeholder={"Username"} onChange={event => setUsername(event.target.value)}/>
			<input type={"text"} placeholder={"Email"} onChange={event => setEmail(event.target.value)}/>
			<input type={"password"} placeholder={"Password"} onChange={event => setPassword(event.target.value)}/>
			<button onClick={register}>Register</button>
		</div>
	);
};

export default Register;