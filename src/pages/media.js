const Welgo = require("welgo");
const Page = require("../components/page");
const { getTags, getNestedTags, getMedia } = require("../data/index");
const Tags = require("../components/tags");
const Media = require("../components/media");

module.exports = class ArtPage extends Welgo.Component {
  async resolveData() {
    const { tag, page, type } = this.props;

    if (tag) {
      const [tags, media] = await Promise.all([
        getNestedTags(tag),
        getMedia({ type, tags: tag, page: page ? page - 1 : 0 })
      ]);

      return { tags, media };
    }

    const tags = await getTags(type);
    return { tags };
  }
  renderBreadcrumbs() {
    const { tag, type, title } = this.props;

    if (tag) {
      const link = type === "photo" ? "/photo" : "/paint";
      return (
        <div className={"back-wrapper"}>
          <a className={"scroll-link"} href="#pictures">
            Scroll to pictures
          </a>
          {" / "}
          <a className={"back"} href={link}>
            {`Back to all ${title.toLowerCase()}`}
          </a>
        </div>
      );
    }
  }
  getTitle() {
    const { tag, tags, title } = this.props;
    if (tag && tags && tags.entities) {
      const tagObject = tags.entities[tag];

      if (tagObject && tagObject.name) {
        return tagObject.name;
      }
    }

    return title;
  }
  render() {
    const { tags, media, tag } = this.props;

    return (
      <Page>
        <h1 className={"title"}>{this.getTitle()}</h1>
        {this.renderBreadcrumbs()}
        <Tags tag={tag} {...tags} />
        <div id="pictures">{media && <Media {...media} />}</div>
      </Page>
    );
  }
};
