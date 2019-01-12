const Welgo = require("welgo");
const Page = require("../components/page");
const { getArticle } = require("../data/index");

module.exports = class BlogPage extends Welgo.Component {
  async resolveData() {
    const article = await getArticle(this.props.id);

    return { article };
  }
  renderArticle() {
    const { article } = this.props;
    return (
      <div id="article_content">
        <div
          className={"article-background"}
          style={`background-image: url(${article.cover})`}
        >
          <div className={"article-title-container"}>
            <h2 className={"article-title"}>{article.title}</h2>
            <h4 className={"article-subtitle"}>{article.subtitle}</h4>
          </div>
        </div>
        <div className={"article-content"}>{article.text}</div>
      </div>
    );
  }
  render() {
    return <Page>{this.renderArticle()}</Page>;
  }
};
