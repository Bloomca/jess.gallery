const Welgo = require("welgo");
const Block = require("./block");

module.exports = class Tags extends Welgo.Component {
  render() {
    const { data, entities, tag } = this.props;

    const list = data || [];

    const blocksMarkup = list.map(({ tag }, i) => {
      const tagObject = entities[tag];

      return (
        <li className={`block ${i > 5 ? "block__hidden" : ""}`}>
          <Block
            url={`?name=${tagObject.name}&tag=${tagObject.id}`}
            src={tagObject.cover || "/photo.webp"}
            title={tagObject.name}
          />
        </li>
      );
    });

    const showMoreTags =
      list.length > 6 ? <div id="show_more_tags">Show more</div> : null;

    return (
      <div>
        {data && <ul className={"blocks"}>{blocksMarkup}</ul>}
        {showMoreTags}
      </div>
    );
  }
};
