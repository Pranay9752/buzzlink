// models/Post.js

import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    caption: { type: String, required: true },
    images: { type: [String], required: false },
  },
  { timestamps: true }
);

export const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
