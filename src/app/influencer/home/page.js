// pages/influencer.js


export async function getServerSideProps(context) {
  // Fetch data from an API or other source
  const res = await fetch("https://api.example.com/posts/1");
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

function InfluencerHome({ post }) {
  return (
    <div className="flex flex-col p-2 gap-3 mb-[7vh]">
      <InfluencerPost post={post} />;
    </div>
  );
}
export default InfluencerHome;
