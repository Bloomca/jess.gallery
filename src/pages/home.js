const Welgo = require("welgo");
const Page = require("../components/page");
const Slider = require("../components/slider");

module.exports = function HomePage() {
  return (
    <Page shadowHeader>
      <Slider />
      <h1 class={"title title__homepage"}>{"Jess Zaikova"}</h1>
      <h3 class={"subtitle"}>{"Artist"}</h3>
    </Page>
  );
};
