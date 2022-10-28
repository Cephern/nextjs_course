export default function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <h1>Showing news for {category}</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} {article.title}
          </h2>
          <p>{article.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;

  console.log(req.headers.cookie);

  console.log(query);

  res.setHeader("Set-Cookie", ["name=Exodus"]);

  const data = await fetch(
    `http://localhost:4000/news?category=${params.category}`
  ).then((res) => res.json());

  return { props: { articles: data, category: params.category } };
}
