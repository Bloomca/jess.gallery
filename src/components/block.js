const Welgo = require("welgo");

module.exports = function Block(props) {
  return (
    <a href={props.url}>
      <div
        className={"block-image"}
        style={`background-image: url(${props.src})`}
      />
      <h3>{props.title}</h3>
    </a>
  );
};
