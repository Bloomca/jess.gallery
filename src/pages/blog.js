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
      <a href={`/blog/${article.id}`} className={"blog-elem"}>
        <div
          className={"blog-image"}
          style={`background-image: url(${article.cover});`}
        />
        <div className={"blog-thumbnail"}>
          <h3 className={"blog-thumbnail-title"}>{article.title}</h3>
          <div />
          <h4 className={"blog-thumbnail-subtitle"}>{article.subtitle}</h4>
        </div>
      </a>
    ));
    return (
      <Page>
        <h1 className={"title"}>{"Blog"}</h1>
        <div class="blog-grid">{articlesMarkup}</div>
      </Page>
    );
  }
};
