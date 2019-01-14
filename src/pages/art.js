const Welgo = require("welgo");
const Page = require("../components/page");
const Block = require("../components/block");

module.exports = function ArtPage() {
  return (
    <Page>
      <h1 class={"title"}>{"Art"}</h1>
      <ul class={"blocks"}>
        <li class={"block"}>
          <Block src={"/photo.webp"} url={"/photo"} title={"Photography"} />
        </li>
        <li class={"block"}>
          <Block src={"/art.webp"} url={"/paint"} title={"Traditional Art"} />
        </li>
        <li class={"block"}>
          <Block src={"/music.webp"} url={"/music"} title={"Music"} />
        </li>
      </ul>
    </Page>
  );
};
