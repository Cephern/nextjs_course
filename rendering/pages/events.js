import { useState } from "react";
import { useRouter } from "next/router";

export default function Events({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const handleClick = async () => {
    const data = await fetch(
      `http://localhost:4000/events?category=sports`
    ).then((res) => res.json());

    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <>
      <h1>List of Events</h1>
      <br />
      <button onClick={handleClick}>Sports Events</button>
      {events.map((event) => (
        <div key={event.id}>
          <h2>
            {event.id} {event.date} {event.category}
          </h2>
          <p>{event.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const { category } = context.query;

  const queryString = category ? "category=sports" : "";

  const data = await fetch(`http://localhost:4000/events?${queryString}`).then(
    (res) => res.json()
  );

  return { props: { eventList: data } };
}
