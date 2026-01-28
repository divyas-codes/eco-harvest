const express = require("express");
const router = express.Router();
const Pickup = require("../models/Pickup");

router.post("/", async (req, res) => {
  try {
    const pickup = new Pickup(req.body);
    await pickup.save();
    res.status(201).json({ message: "Pickup saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
