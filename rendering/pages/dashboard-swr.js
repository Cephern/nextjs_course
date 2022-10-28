import useSWR from "swr";

const fetcher = async () => {
  const data = await fetch("http://localhost:4000/dashboard").then((res) =>
    res.json()
  );

  return data;
};

export default function DasboardSWR() {
  const { data, error } = useSWR("dasboard", fetcher);

  if (error) return "An error has occured";
  if (!data) return "Loading...";

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Posts - {data.posts}</h3>
      <h3>Likes - {data.likes}</h3>
      <h3>Followers - {data.followers}</h3>
      <h3>Following - {data.following}</h3>
    </div>
  );
}
