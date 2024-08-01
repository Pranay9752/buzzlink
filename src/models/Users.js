import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  role: {
    type: String,
    enum: ["influencer", "brand"],
    required: [true, "Please specify a role"],
  },
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model("User", UserSchema);