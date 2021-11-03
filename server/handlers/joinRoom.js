import User from "../models/user.js";

export const joinRoom = (io, socket) => {
	console.log(`${socket.id} has connected!`);
	socket.on("join_room", async (user) => {
		await User.findById(user._id);
		// socket.join(data);
		// console.log(`User with ID: ${socket.id} joined room: ${data}`)
	});
};