import Message from "../models/message.js";

export const messages = (io, socket) => {
	socket.on("send_messages", (messageData) => {
		const message = new Message({
			username: messageData.username,
			messages: messageData.message,
			room: messageData.room,
		});
		message.save().then(() => {
			socket.to(messageData.room).emit("receive_messages", messageData);
		});
	});
};