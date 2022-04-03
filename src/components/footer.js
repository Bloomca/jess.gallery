const Welgo = require("welgo");

require('./footer.module.css');

module.exports = function Footer() {
  return (
    <footer className="footer">
      <div>
        <a target="_blank" href="https://mymanymuses.com/">
          {"MyManyMuses"}
        </a>
      </div>
    </footer>
  );
};
