const Welgo = require("welgo");
const Header = require("./header");
const Footer = require("./footer");

module.exports = class Page extends Welgo.Component {
  renderHeader() {
    const { shadowHeader } = this.props;

    const header = (
      <header className={`header`}>
        <Header />
      </header>
    );

    if (shadowHeader) {
      return <div className={"header__shadow"}>{header}</div>;
    }

    return header;
  }
  render() {
    return (
      <body>
        <div style={"display: flex; flex-direction: column;height: 100%"}>
          {this.renderHeader()}
          <div className={"content"}>{this.props.children}</div>
          <Footer />
          <script src="/index.js" />
        </div>
      </body>
    );
  }
};
