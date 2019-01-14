const Welgo = require("welgo");

const styles = require("./block.sass");

module.exports = function Block(props) {
  return (
    <a href={props.url}>
      <div
        class={styles.blockImage}
        style={{ "background-image": `url(${props.src})` }}
      />
      <h3>{props.title}</h3>
    </a>
  );
};
