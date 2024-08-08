// models/Post.js

import mongoose from "mongoose";


const ReplySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  repliedAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });





export const Reply = mongoose.models.Reply || mongoose.model("Reply", ReplySchema);
