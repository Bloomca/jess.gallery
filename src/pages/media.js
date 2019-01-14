const Welgo = require("welgo");
const Page = require("../components/page");
const { getTags, getNestedTags, getMedia } = require("../data/index");
const Tags = require("../components/tags");
const Media = require("../components/media");

module.exports = async function ArtPage(props) {
  const { tags, media } = await resolveData(props);

  return (
    <Page>
      <h1 class={"title"}>{getTitle({ ...props, tags })}</h1>
      {renderBreadcrumbs(props)}
      <Tags tag={props.tag} {...tags} />
      <div id="pictures">{media && <Media {...media} />}</div>
    </Page>
  );
};

async function resolveData({ tag, page, type }) {
  if (tag) {
    const [tags, media] = await Promise.all([
      getNestedTags(tag),
      getMedia({ type, tags: tag, page: page ? page - 1 : 0 })
    ]);

    return { tags, media };
  }

  const [tags, media] = await Promise.all([
    getTags(type),
    getMedia({ type, page: page ? page - 1 : 0 })
  ]);

  return { tags, media };
}

function renderBreadcrumbs({ tag, type, title }) {
  if (tag) {
    const link = type === "photo" ? "/photo" : "/paint";
    return (
      <div class={"back-wrapper"}>
        <a class={"scroll-link"} href="#pictures">
          Scroll to pictures
        </a>
        {" / "}
        <a class={"back"} href={link}>
          {`Back to all ${title.toLowerCase()}`}
        </a>
      </div>
    );
  }
}

function getTitle({ tag, tags, title }) {
  if (tag && tags && tags.entities) {
    const tagObject = tags.entities[tag];

    if (tagObject && tagObject.name) {
      return tagObject.name;
    }
  }

  return title;
}
