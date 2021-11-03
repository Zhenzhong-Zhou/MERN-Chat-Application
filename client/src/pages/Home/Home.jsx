import {Link} from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<Link to={"/register"}><span>Register</span></Link>
			<br/>
			<Link to={"/login"}><span>Login</span></Link>
		</div>
	);
};

export default Home;