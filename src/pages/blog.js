const Welgo = require("welgo");
const Page = require("../components/page");
const { getArticles } = require("../data/index");

module.exports = async function BlogPages() {
  const articles = await getArticles();
  const articlesMarkup = articles.map(article => (
    <a href={`/blog/${article.id}`} class={"blog-elem"}>
      <div
        class={"blog-image"}
        style={{ "background-image": `url(${article.cover});` }}
      />
      <div class={"blog-thumbnail"}>
        <h3 class={"blog-thumbnail-title"}>{article.title}</h3>
        <div />
        <h4 class={"blog-thumbnail-subtitle"}>{article.subtitle}</h4>
      </div>
    </a>
  ));
  return (
    <Page>
      <h1 class={"title"}>{"Blog"}</h1>
      <div class="blog-grid">{articlesMarkup}</div>
    </Page>
  );
};
