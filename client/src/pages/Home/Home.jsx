import {Link} from "react-router-dom";
import {NavBar} from "../../components";

const Home = () => {
	return (
		<div>
			<NavBar/>
			<h1>Home</h1>
			<h3>Loading page / component</h3><br/>
			<Link to={"/register"}><span>Register</span></Link>
			<br/>
			<Link to={"/login"}><span>Login</span></Link>
			<br/>
			<Link to={"/room"}><span>Join A Room</span></Link>
		</div>
	);
};

export default Home;