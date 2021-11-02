import express from "express";

const router = express.Router();
router.get("/", (req, res) => {
	res.send("Welcome to MERN Chat App Backend!")
});
export default router;