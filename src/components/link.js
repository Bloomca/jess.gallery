const Welgo = require("welgo");
const { stringify } = require("query-string");

module.exports = function Link(props, { req }) {
  const { children, path, className, style } = props;

  const link = path || req.path;
  const query = getQuery({ ...props, urlQuery: req.query });
  const hash = getHash(props);

  return (
    <a
      className={className || ""}
      href={`${link}${query}${hash}`}
      style={style || ""}
    >
      {children}
    </a>
  );
};

function getQuery({ query, withQuery, urlQuery }) {
  let stringifiedQuery = "";
  if (withQuery) {
    stringifiedQuery = stringify(Object.assign({}, urlQuery, query));
  } else {
    stringifiedQuery = stringify(query);
  }

  return stringifiedQuery ? `?${stringifiedQuery}` : "";
}

function getHash({ hash }) {
  return hash ? `#${hash}` : "";
}
