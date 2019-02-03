const Welgo = require("welgo");
const { getSliderImages } = require("../data/index");

module.exports = async function Slider() {
  const links = await getSliderImages();
  const sliderImages = links.map(link => (
    <div
      class={"slider-image"}
      style={{ "background-image": `url(${link})` }}
    />
  ));
  return (
    <div data-slider class={`slider`}>
      <div class={"slider-wrapper"}>{sliderImages}</div>
    </div>
  );
};
