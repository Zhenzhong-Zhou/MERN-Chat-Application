import {useState} from "react";
import {Chat} from "../../components";
import {useSelector} from "react-redux";
import {io} from "socket.io-client";

const Room = () => {
	const socket = io(process.env.REACT_APP_LOCAL_URL);
	const auth = useSelector(state => state.auth.currentUser);
	const [room, setRoom] = useState("");
	const [messages, setMessages] = useState(false);

	const joinRoom = (e) => {
		e.preventDefault();
		if (auth !== null) {
			socket.emit("join_room", auth, room);
			setMessages(true);
		}
	};

	return (
		<div>
			{!messages ?
				<div>
					<h3>Join A Chat</h3>
					<input type={"text"} placeholder={"Room ID"} onChange={event => setRoom(event.target.value)}/>
					<button onClick={joinRoom}>Join A Room</button>
				</div>
				: <Chat socket={socket} auth={auth} room={room}/>
			}
		</div>
	);
};

export default Room;