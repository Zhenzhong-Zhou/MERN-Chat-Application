import User from "../models/user.js";

export const register = (io, socket) => {
	console.log(`${socket.id} has connected!`);
	socket.on("join_room", async (user) => {
		console.log(user)
		 await User.findById(user._id);
			// socket.join(data);
		// console.log(`User with ID: ${socket.id} joined room: ${data}`)
	});
};