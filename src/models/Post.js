// models/Post.js

import mongoose from "mongoose";
import { Comment } from "./Comment";
import { Like } from "./Like";



const PostSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: function() {
        return !this.images || this.images.length === 0;
      },
    },
    images: {
      type: [String],
      required: function() {
        return !this.caption;
      },
    },
    vibe: {
      type: String,
      match: /^#[0-9A-F]{6}$/i, // Ensures it is a valid hex color code
      required: true,
    },
    likes: [Like],
    comments: [Comment],
  },
  { timestamps: true }
);




export const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
