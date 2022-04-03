const Welgo = require("welgo");
const Page = require("../components/page");
const { getArticle } = require("../data/index");

module.exports = async function BlogPage({ id }, context) {
  const article = await getArticle(id);

  if (!article || article.error) {
    context.statusCode = 404;
    return (
      <Page>
        <div class="container">
          <h1>Article Not Found</h1>
          <p>
            Sorry, we could not find your article.
          </p>
        </div>
      </Page>
    );
  }

  return (
    <Page>
      <div id="article_content">
        <div
          class={"article-background"}
          style={{ "background-image": `url(${article.cover})` }}
        >
          <div class={"article-title-container"}>
            <h2 class={"article-title"}>{article.title}</h2>
            <h4 class={"article-subtitle"}>{article.subtitle}</h4>
          </div>
        </div>
        <div
          class={"article-content"}
          dangerouslySetInnerHTML={{ __html: article.text }}
        />
      </div>
    </Page>
  );
};
