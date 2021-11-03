import {useState} from "react";
import {Chat} from "../../components";

const Room = ({socket}) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [room, setRoom] = useState("");
	const [messages, setMessages] = useState(false);

	const joinRoom = (e) => {
		e.preventDefault();
		if (username !== "" && email !== "" && password !== "") {
			socket.emit("join_room", username, email, password, room);
			setMessages(true);
		}
	};

	return (
		<div>
			{!messages ?
				<div>
					<h3>Join A Chat</h3>
					<input type={"text"} placeholder={"Username"} onChange={event => setUsername(event.target.value)}/>
					<input type={"text"} placeholder={"Email"} onChange={event => setEmail(event.target.value)}/>
					<input type={"password"} placeholder={"Password"} onChange={event => setPassword(event.target.value)}/>
					<input type={"text"} placeholder={"Room ID"} onChange={event => setRoom(event.target.value)}/>
					<button onClick={joinRoom}>Join A Room</button>
				</div>
				: <Chat socket={socket} username={username} email={email} password={password} room={room}/>
			}
		</div>
	);
};

export default Room;