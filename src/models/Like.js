// models/Post.js

import mongoose from "mongoose";


const LikeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  likedAt: {
    type: Date,
    default: Date.now,
  },
},{ timestamps: true });






export const Like = mongoose.models.Like || mongoose.model("Like", LikeSchema);
