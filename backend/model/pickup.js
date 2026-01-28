const mongoose = require("mongoose");

const pickupSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Pickup", pickupSchema);
