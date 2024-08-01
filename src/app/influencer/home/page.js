// src/app/influencer/home/page.js
import InfluencerPost from "@/app/influencer/home/InfluencerPost";

async function getData() {

  return [
    {
      id: 1,
      username: "@pranay",
      avatarUrl: "/images/stock/photo-1534528741775-53994a69daeb.webp",
      images: [
        "/docs/images/carousel/carousel-1.svg",
        "/docs/images/carousel/carousel-2.svg",
        "/docs/images/carousel/carousel-3.svg",
      ],
      caption: "7 best product tour JavaScript libraries for frontend apps",
      likes: 42,
      comments: [
        { username: "user1", text: "Great post!" },
        { username: "user2", text: "Thanks for sharing!" },
      ],
    },
    {
      id: 2,
      username: "@jane_doe",
      avatarUrl: "/images/stock/photo-1534528741775-53994a69daeb.webp",
      images: [
        "/docs/images/carousel/carousel-4.svg",
        "/docs/images/carousel/carousel-5.svg",
      ],
      caption: "Top 5 UI design trends for 2024",
      likes: 28,
      comments: [{ username: "user3", text: "Love these trends!" }],
    },
    {
      id: 3,
      username: "@john_smith",
      avatarUrl: "/images/stock/photo-1534528741775-53994a69daeb.webp",
      images: [],
      caption: "The future of AI in web development",
      likes: 35,
      comments: [],
    },
  ];
}

export default async function InfluencerHome() {
  const posts = await getData();

  return (
    <div className="flex flex-col p-2 gap-3 mb-[7vh]">
      {posts.map((item) => (
        <InfluencerPost key={item.id} post={item} />
      ))}
    </div>
  );
}
