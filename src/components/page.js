const Welgo = require("welgo");
const Header = require("./header");
const Footer = require("./footer");

module.exports = function Page({ shadowHeader, children }) {
  const style = {
    display: "flex",
    "flex-direction": "column",
    height: "100%"
  };
  return (
    <body>
      <div style={style}>
        {renderHeader({ shadowHeader })}
        <div class={"content"}>{children}</div>
        <Footer />
        <script src="/index.js" />
      </div>
    </body>
  );
};

function renderHeader({ shadowHeader }) {
  const header = (
    <header class="header">
      <Header />
    </header>
  );

  if (shadowHeader) {
    return <div class="header__shadow">{header}</div>;
  }

  return header;
}
