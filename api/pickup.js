module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI);
    }

    const pickup = new Pickup(req.body);
    await pickup.save();

    res.status(200).json({ message: "Pickup saved" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
