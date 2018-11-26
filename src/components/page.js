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
      <html>
        <head>
          <link rel={"stylesheet"} href="/styles.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic|PT+Sans+Caption:700,400|Source+Sans+Pro:400|Raleway:300"
            rel="stylesheet"
            type="text/css"
          />
          <link rel="icon" href="/favicons/favicon.ico" />
          <link
            rel="apple-touch-icon"
            href="/favicons/favicon-57x57.png"
            type="image/png"
            sizes="57x57"
          />
          <link
            rel="apple-touch-icon"
            href="/favicons/favicon-60x60.png"
            type="image/png"
            sizes="60x60"
          />
          <link
            rel="apple-touch-icon"
            href="/favicons/favicon-72x72.png"
            type="image/png"
            sizes="72x72"
          />
          <link
            rel="apple-touch-icon"
            href="/favicons/favicon-76x76.png"
            type="image/png"
            sizes="76x76"
          />
          <link
            rel="apple-touch-icon"
            href="/favicons/favicon-114x114.png"
            type="image/png"
            sizes="114x114"
          />
          <link
            rel="apple-touch-icon"
            href="/favicons/favicon-120x120.png"
            type="image/png"
            sizes="120x120"
          />
          <link
            rel="apple-touch-icon"
            href="/favicons/favicon-144x144.png"
            type="image/png"
            sizes="144x144"
          />
          <link
            rel="apple-touch-icon"
            href="/favicons/favicon-152x152.png"
            type="image/png"
            sizes="152x152"
          />
          <link
            rel="apple-touch-icon"
            href="/favicons/favicon-180x180.png"
            type="image/png"
            sizes="180x180"
          />
          <link
            rel="apple-touch-icon"
            href="/favicons/favicon-32x32.png"
            type="image/png"
            sizes="32x32"
          />
          <link
            rel="apple-touch-icon"
            href="/favicons/favicon-192x192.png"
            type="image/png"
            sizes="192x192"
          />
          <link
            rel="apple-touch-icon"
            href="/favicons/favicon-96x96.png"
            type="image/png"
            sizes="96x96"
          />
          <link
            rel="apple-touch-icon"
            href="/favicons/favicon-16x16.png"
            type="image/png"
            sizes="16x16"
          />
        </head>
        <body>
          <div style={"display: flex; flex-direction: column;height: 100%"}>
            {this.renderHeader()}
            <div className={"content"}>{this.props.children}</div>
            <Footer />
            <script src="/index.js" />
          </div>
        </body>
      </html>
    );
  }
};
