// src/app/influencer/home/page.js
import { getpost } from "@/_actions/post_actions";
import InfluencerPost from "@/app/influencer/home/InfluencerPost";

async function getData() {
  const posts = await getpost();
  return posts;
}

export default async function InfluencerHome() {
  const posts = await getData();

  return (
    <div className="flex flex-col p-2 gap-3 mb-[7vh]">
      {/* {posts?.message ? (
        posts.map((item) => <InfluencerPost key={item.id} post={item} />)
        ) : (
          <>{posts.message}</>
          )} */}
      {posts.map((item) => (
        <InfluencerPost key={item.id} post={item} />
      ))}
    </div>
  );
}
