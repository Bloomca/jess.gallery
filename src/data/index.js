const request = require("request");
const queryString = require("query-string");

const PREFIX = "https://node-api.jess.gallery";

module.exports.getSliderImages = () => {
  return getJSON("/v1/slider_images");
};

module.exports.getArticles = () => {
  return getJSON("/v2/articles").then(result => result.data);
};

module.exports.getArticle = id => {
  return getJSON(`/v1/articles/${id}`);
};

module.exports.getTags = type => {
  const url = formatURL({
    url: "/v2/top_tags",
    query: {
      type,
      nesting: 1
    }
  });

  return getJSON(url);
};

module.exports.getNestedTags = tag => {
  const url = formatURL({
    url: "/v2/nested_tags",
    query: {
      tag
    }
  });

  return getJSON(url);
};

module.exports.getMedia = ({ type, tags, page = 0 }) => {
  const url = formatURL({
    url: "/v1/images",
    query: {
      pageNumber: page,
      pageSize: 30,
      type,
      tags
    }
  });

  return getJSON(url);
};

module.exports.getPicture = ({ id }) => {
  const url = formatURL({
    url: `/v1/images/${id}`
  });

  return getJSON(url);
};

module.exports.getImageTags = ({ id }) => {
  const url = formatURL({
    url: `/v1/image_tags/${id}`
  });

  return getJSON(url);
};

function getJSON(url) {
  const fullURL = `${PREFIX}${url}`;
  return new Promise((resolve, reject) => {
    request.get(fullURL, function(error, response, body) {
      if (error) {
        reject(error);
      } else {
        const parsedBody = JSON.parse(body);
        resolve(parsedBody);
      }
    });
  });
}

function formatURL({ url, query }) {
  if (query) {
    const stringifiedQuery = queryString.stringify(query);

    return `${url}?${stringifiedQuery}`;
  }

  return url;
}
