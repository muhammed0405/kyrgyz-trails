import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import User from "./../../server";

const app = express();
const PORT = 3000;
const SECRET_KEY = "your_secret_key";

app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:3000/kyrgyz-trails");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error(
      "Error connecting to MongoDB:",
      error instanceof Error ? error.message : error
    );
    process.exit(1);
  }
};

connectDB();

app.post("/auth/register_user", async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});

app.post("/auth/login_user", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    console.error(
      "Error during login:",
      error instanceof Error ? error.message : error
    );
    res.status(500).json({ message: "Server error", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
