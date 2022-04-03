const Welgo = require("welgo");
const Page = require("../components/page");
const Slider = require("../components/slider");

module.exports = function HomePage() {
  return (
    <Page shadowHeader>
      <Slider />
    </Page>
  );
};
