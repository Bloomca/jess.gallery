const Welgo = require("welgo");
const Page = require("../components/page");
const { getArticles } = require("../data/index");

module.exports = class BlogPage extends Welgo.Component {
  async resolveData() {
    const articles = await getArticles();

    return { articles };
  }
  render() {
    const articlesMarkup = this.props.articles.map(article => (
      <a href={`/blog/${article.id}`} className={"article-preview"}>
        <img className={"article-preview-image"} src={article.cover} />
        <div className={"article-preview-text"}>
          <h3 className={"article-preview-title"}>{article.title}</h3>
          <div />
          <h4 className={"article-preview-subtitle"}>{article.subtitle}</h4>
        </div>
      </a>
    ));
    return (
      <Page>
        <h1 className={"title"}>{"Blog"}</h1>
        <div className={"container"}>{articlesMarkup}</div>
      </Page>
    );
  }
};
