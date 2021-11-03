import {io} from "socket.io-client";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home, Login, NotFound, Register, Room} from "./pages";

const App = ()  => {
	const socket = io(process.env.REACT_APP_LOCAL_URL);
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={"/register"} component={() => <Register socket={socket}/>}/>
				<Route exact path={"/login"} component={() => <Login/>}/>
				<Route exact path={"/"} component={Home}/>
				<Route exact path={"/room"} component={Room} socket={socket}/>
				<Route exact path={""} component={NotFound}/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;