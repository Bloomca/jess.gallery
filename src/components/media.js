const Welgo = require("welgo");
const Link = require("./link");

const RATIO_TRESHOLD = 5;

module.exports = class Media extends Welgo.Component {
  resolveData({ req }) {
    return { backLink: req.url };
  }
  renderPagination() {
    const { meta } = this.props;

    if (!meta) {
      return null;
    }

    const numberOfPages = Math.floor(meta.total / meta.page_size);
    const currentPage = meta.offset / meta.page_size + 1;

    const links = [];

    for (let i = 1; i <= numberOfPages; i++) {
      const activeClass = currentPage === i ? "pagination-link__active" : "";
      links.push(
        <Link
          className={`pagination-link ${activeClass}`}
          withQuery
          hash={"pictures"}
          query={{ page: i }}
        >
          {String(i)}
        </Link>
      );
    }

    return <div className={"pagination"}>{links}</div>;
  }
  prepareLines() {
    const lines = [];
    let currentLine = {
      data: []
    };
    let lineRatio = 0;

    this.props.data.forEach(data => {
      const ratio = data.original_width / data.original_height;

      if (lineRatio + ratio <= RATIO_TRESHOLD) {
        currentLine.data.push(data);
        lineRatio += ratio;
      } else {
        currentLine.ratio = lineRatio;
        lines.push(currentLine);
        lineRatio = ratio;
        currentLine = {
          data: [data]
        };
      }
    });

    return lines;
  }
  renderImage({ width, gap, picture }) {
    const { backLink } = this.props;
    return (
      <Link
        path={`/media/${picture.id}`}
        query={{ backLink }}
        style={`width: calc(${width * 100}% - ${gap}px);`}
        className={"media-element"}
      >
        <img
          className={"media-element-image"}
          src={picture.small_url}
          alt={picture.title}
        />
      </Link>
    );
  }
  renderImages() {
    const lines = this.prepareLines();

    return lines.map(({ data, ratio }) => {
      const numberOfElements = data.length;
      const elements = data.map(picture => {
        const pictureRatio = picture.original_width / picture.original_height;
        const width = pictureRatio / ratio;
        const gap = ((numberOfElements - 1) * 15) / numberOfElements;
        return this.renderImage({ width, gap, picture });
      });
      return <div className={"media-line"}>{elements}</div>;
    });
  }
  render() {
    const dataMarkup = this.renderImages();
    const paginationMarkup = this.renderPagination();

    return (
      <div class={"media-elements"} id={"pictures"}>
        {paginationMarkup}
        {dataMarkup}
        {paginationMarkup}
      </div>
    );
  }
};
