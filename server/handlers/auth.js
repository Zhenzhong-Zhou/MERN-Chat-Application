import User from "../models/user.js";

export const register = (io, socket) => {
	console.log(`${socket.id} has connected!`);
	socket.on("join_room", (username, email, password) => {
		const newUser = new User({
			username,
			email,
			password
		});
		newUser.save().then(() => {
			// socket.join(data);
		});
		// console.log(`User with ID: ${socket.id} joined room: ${data}`)
	});
};