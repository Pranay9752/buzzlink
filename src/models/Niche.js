import mongoose from "mongoose";




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

export const Niche = mongoose.models.Niche || mongoose.model("Niche", NicheSchema);