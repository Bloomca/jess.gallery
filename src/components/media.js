const Welgo = require("welgo");
const Link = require("./link");

require('./media.module.css');

const RATIO_TRESHOLD = 5;

module.exports = function Media(props) {
  const dataMarkup = renderImages(props);
  const paginationMarkup = <Pagination meta={props.meta} />;

  return (
    <div class='elements' id={"pictures"}>
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

  if (numberOfPages === 1) {
    return null;
  }

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

  if (currentLine.data.length !== 0) {
    currentLine.ratio = lineRatio;
    lines.push(currentLine);
  }

  return lines;
}

function Image({ width, gap, picture }, { req }) {
  const backLink = req.url;
  return (
    <Link
      path={`/media/${picture.id}`}
      query={{ backLink }}
      style={{ width: `calc(${width * 100}% - ${gap}px)` }}
      className='image'
    >
      <img class='image' src={picture.big_url} alt={picture.title} />
    </Link>
  );
}

function renderImages({ data }) {
  const lines = prepareLines({ images: data });

  if (lines.length === 0) {
    return (
      <>
        <h2 class='noImagesTitle'>Sorry, no images with this tag!</h2>
      </>
    );
  }

  return lines.map(({ data, ratio }) => {
    const numberOfElements = data.length;
    const elements = data.map(picture => {
      const pictureRatio = picture.original_width / picture.original_height;
      const width = pictureRatio / ratio;
      const gap = ((numberOfElements - 1) * 15) / numberOfElements;
      return <Image width={width} gap={gap} picture={picture} />;
    });
    return <div className='line'>{elements}</div>;
  });
}
