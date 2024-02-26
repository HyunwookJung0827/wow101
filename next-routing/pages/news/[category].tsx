function ArticleListByCatergory({ articles, category }) {
  return (
    <div>
      <h1>Showing news for Category: {category}</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default ArticleListByCatergory;

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  const response = await fetch(
    `https://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
