import express from "express";
import dotenv from "dotenv";
import {Server} from "socket.io";
import {createServer} from "http";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

// Routes Imports
import indexRoutes from "./routes/index.js";

// Models Imports (Remove imports then function save highlight)
import User from "./models/user.js";
import Message from "./models/message.js";

// Initialization App
const app = express();
dotenv.config();
const server = createServer(app);
const io = new Server(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"]
	}
});

// Middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

// Routes
app.use("/", indexRoutes);

// Socket.io connection
io.on("connection", (socket) => {
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
	socket.on("disconnect", () => {
		console.log(`${socket.id} has left...`)
	});
});

// Server listen and connect to MongoDB
const PORT = process.env.PORT;
mongoose.connect(process.env.DATABASE_URL)
	.then(() => server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
	.catch((error) => console.log(error));