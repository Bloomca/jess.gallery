const Welgo = require("welgo");

require('./block.module.css');

module.exports = function Block(props) {
  return (
    <a href={props.url}>
      <div
        class='blockImage'
        style={{ "background-image": `url(${props.src})` }}
      />
      <h3>{props.title}</h3>
    </a>
  );
};
