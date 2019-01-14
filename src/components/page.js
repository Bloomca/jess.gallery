const Welgo = require("welgo");
const Header = require("./header");
const Footer = require("./footer");

module.exports = function Page({ shadowHeader, children }) {
  return (
    <body>
      <div style={"display: flex; flex-direction: column;height: 100%"}>
        {renderHeader({ shadowHeader })}
        <div className={"content"}>{children}</div>
        <Footer />
        <script src="/index.js" />
      </div>
    </body>
  );
};

function renderHeader({ shadowHeader }) {
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
