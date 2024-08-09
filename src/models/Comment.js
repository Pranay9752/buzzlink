// models/Post.js

import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    commentedAt: {
      type: Date,
      default: Date.now,
    },
    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reply",
      },
    ],
  },
  { timestamps: true }
);

export const Comment =
  mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
