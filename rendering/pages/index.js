import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href={"/users"}>Users</Link>
      <br />
      <Link href={"/post"}>Posts</Link>
      <br />
      <Link href={"/products"}>Products</Link>
    </div>
  );
}
