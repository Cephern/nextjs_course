export default function NewsList({ news }) {
  return (
    <>
      <h1>List of new Articles</h1>
      {news.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} {article.title} | {article.category}
          </h2>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetch("http://localhost:4000/news").then((res) =>
    res.json()
  );

  return { props: { news: data } };
}
