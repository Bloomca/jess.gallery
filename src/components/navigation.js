const Welgo = require("welgo");

module.exports = function Navigation() {
  return (
    <Welgo.Fragment>
      <a href="/">{"Home"}</a>
      <a href="/art">{"Art"}</a>
      <a target="_blank" rel="noopener noreferrer" href="https://mymanymuses.com/about/">{"About"}</a>
    </Welgo.Fragment>
  );
};
