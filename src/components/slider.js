const Welgo = require("welgo");

const links = [
  "https://static.jess.gallery/Tbk72s9VXHI9jqJD_1200.jpg",
  "https://static.jess.gallery/tvDQQY5_DiUpSy2H_1200.jpg",
  "https://static.jess.gallery/OOPhohLIz_vUHHZS_1200.jpg"
];

module.exports = class Slider extends Welgo.Component {
  render() {
    const sliderImages = links.map(link => (
      <div
        className={"slider-image"}
        style={`background-image: url(${link})`}
      />
    ));
    return (
      <div data-slider className={"slider"}>
        <div className={"slider-wrapper"}>{sliderImages}</div>
      </div>
    );
  }
};
