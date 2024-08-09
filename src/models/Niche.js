const mongoose = require("mongoose");

const NicheSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    enum: ["influencer", "brand"],
    required: true,
  },
});

const Niche = mongoose.model("Niche", NicheSchema);

module.exports = Niche;
