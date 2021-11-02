import {io} from "socket.io-client";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home, Login} from "./pages";

const socket = io(`https://mern-wechat-application.herokuapp.com/`);

const App = ()  => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={"/login"} component={() => <Login socket={socket}/>}/>
				<Route exact path={"/"} component={Home}/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;