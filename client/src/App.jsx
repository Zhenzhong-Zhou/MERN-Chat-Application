import {io} from "socket.io-client";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import {Home, Login, NotFound, Register, Room} from "./pages";

const App = ()  => {
	const socket = io(process.env.REACT_APP_LOCAL_URL);
	const auth = useSelector(state => state.auth.currentUser);
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={"/register"} component={() => (auth ? <Redirect to={"/"}/> : <Register/>)}/>
				<Route exact path={"/login"} component={() => (auth ? <Redirect to={"/"}/> : <Login/>)}/>
				{auth ?
					(<>
						<Route exact path={"/"} component={Home}/>
						<Route exact path={"/room"} component={Room} socket={socket}/>
						{/*<Route exact path={""} component={NotFound}/>*/}
					</>)
					: <Redirect to={"/login"}/>
				}
			</Switch>
		</BrowserRouter>
	);
};

export default App;