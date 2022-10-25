import User from "../components/user";

export default function UserList({ users }) {
  return (
    <>
      <h1>List of Users</h1>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );

  console.log(data);

  return { props: { users: data } };
}
