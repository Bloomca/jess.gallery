const Welgo = require("welgo");

module.exports = function Header() {
  return (
    <div>
      <a href="/">{"Home"}</a>
      <a href="/art">{"Art"}</a>
      <a href="/about">{"About"}</a>
      <a href="/blog">{"Blog"}</a>
    </div>
  );
};
