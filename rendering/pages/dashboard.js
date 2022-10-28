import { useState, useEffect } from "react";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:4000/dashboard").then((res) =>
        res.json()
      );

      setDashboardData(data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Posts - {dashboardData.posts}</h3>
      <h3>Likes - {dashboardData.likes}</h3>
      <h3>Followers - {dashboardData.followers}</h3>
      <h3>Following - {dashboardData.following}</h3>
    </div>
  );
}
