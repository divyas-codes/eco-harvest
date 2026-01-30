import mongoose from "mongoose";
import Pickup from "../models/pickup.js";

let isConnected = false;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI not found");
    }

    if (!isConnected) {
      await mongoose.connect(process.env.MONGO_URI);
      isConnected = true;
    }

    const { name, email, phone, address, details } = req.body;

    if (!name || !email || !phone || !address) {
      return res.status(400).json({ message: "Missing fields" });
    }
    const Pickup = require("../model/pickup");


    await pickup.save();

    return res.status(200).json({ message: "Pickup saved successfully" });
  } catch (error) {
    console.error("API ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
}
