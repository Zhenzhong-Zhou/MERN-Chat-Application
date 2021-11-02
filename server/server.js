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

// Models Imports

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
	socket.on("disconnect", () => {
		console.log(`${socket.id} has left...`)
	});
});

// Server listen and connect to MongoDB
const PORT = process.env.PORT;
mongoose.connect(process.env.DATABASE_URL)
	.then(() => server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
	.catch((error) => console.log(error));