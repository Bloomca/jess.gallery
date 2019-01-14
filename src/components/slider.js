const Welgo = require("welgo");

const links = [
  "https://static.jess.gallery/Tbk72s9VXHI9jqJD_1200.jpg",
  "https://static.jess.gallery/tvDQQY5_DiUpSy2H_1200.jpg",
  "https://static.jess.gallery/OOPhohLIz_vUHHZS_1200.jpg"
];

module.exports = function Slider() {
  const sliderImages = links.map(link => (
    <div
      class={"slider-image"}
      style={{ "background-image": `url(${link})` }}
    />
  ));
  return (
    <div data-slider class={"slider"}>
      <div class={"slider-wrapper"}>{sliderImages}</div>
    </div>
  );
};
