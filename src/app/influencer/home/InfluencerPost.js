// InfluencerPost.js
"use client";

import React, { useState } from "react";
import Image from "next/image";
import NeoBorder from "@/components/global/border";
import Carousel from "./Carousel";
import BottomSheet from "@/components/global/bottom-sheet/bottom-sheet";

export default function InfluencerPost({
  post,
  onLike = () => {},
  onAddComment = () => {},
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike(post.id, !isLiked);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      onAddComment({ postId: post.id, comment: newComment });
      setNewComment("");
    }
  };

  return (
    <NeoBorder
      offset_x={3}
      offset_y={3}
      className="rounded-md p-3 mr-1 h-fit flex flex-col justify-start items-center gap-3"
    >
      <div className="flex justify-start items-center gap-2 w-full">
        <Image
          className="w-10 h-10 p-1 rounded-full bg-pink-300"
          src={post.avatarUrl}
          alt="Influencer avatar"
          width={40}
          height={40}
        />
        <span className="font-bold text-lg">{post.username}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5 ml-auto"
        >
          <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
        </svg>
      </div>
      {post.images.length > 0 && <Carousel images={post.images} />}
      <p className="text-sm">{post.caption}</p>
      <div className="flex justify-between w-full">
        <button onClick={handleLike} className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isLiked ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <span className="ml-1">{post.likes + (isLiked ? 1 : 0)}</span>
        </button>
        <button
          onClick={() => setShowComments(true)}
          className="flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
            />
          </svg>
          <span className="ml-1">{post.comments.length}</span>
        </button>
      </div>
      <BottomSheet isOpen={showComments} onClose={() => setShowComments(false)}>
        <h3 className="text-lg font-bold mb-4">Comments</h3>
        <div className="space-y-4 mb-4">
          {post.comments.map((comment, index) => (
            <div key={index} className="border-b pb-2">
              <p className="font-semibold">{comment.username}</p>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-grow border rounded-l-md p-2"
          />
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white px-4 rounded-r-md"
          >
            Post
          </button>
        </div>
      </BottomSheet>
    </NeoBorder>
  );
}
