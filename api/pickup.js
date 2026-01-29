import mongoose from "mongoose";
import Pickup from "../model/Pickup.js";

let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await connectDB();

    const pickup = new Pickup(req.body);
    await pickup.save();

    res.status(201).json({ message: "Pickup saved" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
