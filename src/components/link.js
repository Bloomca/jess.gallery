const Welgo = require("welgo");
const { stringify } = require("query-string");

module.exports = class Link extends Welgo.Component {
  constructor(props, context) {
    super(props);
    this.context = context;
  }
  getQuery() {
    const { query, withQuery } = this.props;
    const { query: contextQuery } = this.context;

    let stringifiedQuery = "";
    if (withQuery) {
      stringifiedQuery = stringify(Object.assign({}, contextQuery, query));
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
    const { children, path, className } = this.props;
    const { path: contextPath } = this.context;

    let link = path;
    if (!path) {
      link = contextPath;
    }

    return (
      <a
        className={className || ""}
        href={`${link}${this.getQuery()}${this.getHash()}`}
      >
        {children}
      </a>
    );
  }
};
