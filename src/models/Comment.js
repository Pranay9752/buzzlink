// models/Post.js

import mongoose from "mongoose";
import { Reply } from "./Reply";


const CommentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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
  replies: [Reply],
},
{ timestamps: true });






export const Comment = mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
