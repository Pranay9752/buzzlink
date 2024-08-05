"use server";

import { connectToDatabase } from "@/libs/mongodb";
import { Post } from "@/models/Post";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const addpost = async ({ data }) => {
  await connectToDatabase();

  try {
    const newPost = await Post.create({
      username: cookies().get("username").value,
      ...data,
    });
    newPost.save();
    // revalidatePath("/");
    return newPost.toString();
  } catch (error) {
    console.log(error);
    return { message: "error creating todo" };
  }
};

export const getpost = async () => {
  await connectToDatabase();

  try {
    const posts = await Post.find();

    revalidatePath("/influencer/home");
    return posts;
  } catch (error) {
    console.log(error);
    return { message: "No posts Available" };
  }
};
