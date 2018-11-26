const Welgo = require("welgo");
const Page = require("../components/page");

module.exports = class Page404 extends Welgo.Component {
  render() {
    return (
      <Page>
        <div className={"container"}>
          <h1 className={"title"}>{"Not Found"}</h1>
          <p>Sorry, we did not find your page.</p>
        </div>
      </Page>
    );
  }
};
