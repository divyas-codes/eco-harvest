import mongoose from "mongoose";

const PickupSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  details: String,
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Pickup ||
  mongoose.model("Pickup", PickupSchema);
