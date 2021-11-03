import {Link} from "react-router-dom";

const NotFound = () => {
	return (
		<div>
			<h1>Not Found</h1>
			<Link to={"/"}>Homepage</Link>
		</div>
	);
};

export default NotFound;