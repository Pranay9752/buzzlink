import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    role: {
      type: String,
      enum: ["influencer", "brand"],
      required: [true, "Please specify a role"],
    },
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
    },
    age: {
      type: Number,
      required: [true, "Please provide an age"],
      min: [13, "Age must be at least 13"],
      max: [100, "Age must be less than 100"],
    },
    niches: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Niche",
        required: true,
      },
    ],
  },
  { timestamps: true }
);
export const User = mongoose.models.User || mongoose.model("User", UserSchema);
