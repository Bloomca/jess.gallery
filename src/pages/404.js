const Welgo = require("welgo");
const Page = require("../components/page");

module.exports = function Page404() {
  return (
    <Page>
      <div class={"container"}>
        <h1 class={"title"}>{"Not Found"}</h1>
        <p>Sorry, we did not find your page.</p>
      </div>
    </Page>
  );
};
