const Welgo = require("welgo");
const Link = require("./link");

const styles = require("./media.sass");

const RATIO_TRESHOLD = 5;

module.exports = function Media(props) {
  const dataMarkup = renderImages(props);
  const paginationMarkup = <Pagination meta={props.meta} />;

  return (
    <div class={styles.elements} id={"pictures"}>
      {paginationMarkup}
      {dataMarkup}
      {paginationMarkup}
    </div>
  );
};

function Pagination({ meta }) {
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

  return <div class={"pagination"}>{links}</div>;
}

function prepareLines({ images }) {
  const lines = [];
  let currentLine = {
    data: []
  };
  let lineRatio = 0;

  images.forEach(image => {
    const ratio = image.original_width / image.original_height;

    if (lineRatio + ratio <= RATIO_TRESHOLD) {
      currentLine.data.push(image);
      lineRatio += ratio;
    } else {
      currentLine.ratio = lineRatio;
      lines.push(currentLine);
      lineRatio = ratio;
      currentLine = {
        data: [image]
      };
    }
  });

  return lines;
}

function Image({ width, gap, picture }, { req }) {
  const backLink = req.url;
  return (
    <Link
      path={`/media/${picture.id}`}
      query={{ backLink }}
      style={{ width: `calc(${width * 100}% - ${gap}px)` }}
      className={styles.image}
    >
      <img class={styles.image} src={picture.small_url} alt={picture.title} />
    </Link>
  );
}

function renderImages({ data }) {
  const lines = prepareLines({ images: data });

  return lines.map(({ data, ratio }) => {
    const numberOfElements = data.length;
    const elements = data.map(picture => {
      const pictureRatio = picture.original_width / picture.original_height;
      const width = pictureRatio / ratio;
      const gap = ((numberOfElements - 1) * 15) / numberOfElements;
      return <Image width={width} gap={gap} picture={picture} />;
    });
    return <div className={styles.line}>{elements}</div>;
  });
}
