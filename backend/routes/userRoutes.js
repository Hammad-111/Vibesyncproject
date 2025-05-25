import express from "express";
import User from "../models/user.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:email", async (req, res) => {
  const user = await User.findOne({ email: req.params.email });
  res.json(user);
});

export default router;
