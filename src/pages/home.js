const Welgo = require("welgo");
const Page = require("../components/page");
const Slider = require("../components/slider");

module.exports = class HomePage extends Welgo.Component {
  render() {
    return (
      <Page shadowHeader>
        <Slider />
        <div>
          <h1 className={"title title__homepage"}>{"Jess Zaikova"}</h1>
          <h3 className={"subtitle"}>{"Artist"}</h3>
        </div>
      </Page>
    );
  }
};
