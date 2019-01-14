const Welgo = require("welgo");
const Block = require("./block");

module.exports = function Tags({ data, entities }) {
  const list = data || [];

  const blocksMarkup = list.map(({ tag }, i) => {
    const tagObject = entities[tag];

    return (
      <li class={`block ${i > 5 ? "block__hidden" : ""}`}>
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
    <Welgo.Fragment>
      {data && <ul className={"blocks"}>{blocksMarkup}</ul>}
      {showMoreTags}
    </Welgo.Fragment>
  );
};
