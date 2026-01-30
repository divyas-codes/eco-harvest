import mongoose from "mongoose";

const PickupSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  details: String,
});

module.exports = mongoose.model("Pickup", pickupSchema);

