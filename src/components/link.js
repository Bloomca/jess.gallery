const Welgo = require("welgo");
const { stringify } = require("query-string");

module.exports = class Link extends Welgo.Component {
  resolveData({ req }) {
    return { urlPath: req.path, urlQuery: req.query };
  }
  getQuery() {
    const { query, withQuery, urlQuery } = this.props;

    let stringifiedQuery = "";
    if (withQuery) {
      stringifiedQuery = stringify(Object.assign({}, urlQuery, query));
    } else {
      stringifiedQuery = stringify(query);
    }

    return stringifiedQuery ? `?${stringifiedQuery}` : "";
  }
  getHash() {
    const { hash } = this.props;

    if (hash) {
      return `#${hash}`;
    }

    return "";
  }
  render() {
    const { children, path, urlPath, className, style } = this.props;

    let link = path;
    if (!path) {
      link = urlPath;
    }

    return (
      <a
        className={className || ""}
        href={`${link}${this.getQuery()}${this.getHash()}`}
        style={style || ""}
      >
        {children}
      </a>
    );
  }
};
