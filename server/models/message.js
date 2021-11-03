import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
		user: [{
			userId: {type: String},
		}],
		room: {type: String, required: true},
		messages: {type: String, required: true},
	},
	{timestamps: true}
);

export default mongoose.model("Message", messageSchema);