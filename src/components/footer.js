const Welgo = require("welgo");

module.exports = function Footer() {
  return (
    <footer className={"footer"}>
      <div>
        <a target="_blank" href="https://www.facebook.com/jesszaikova">
          {"Facebook"}
        </a>
        <a target="_blank" href="https://www.instagram.com/jesszaikova/">
          {"Instagram"}
        </a>
        <a href="mailto:jess.zaikova@gmail.com">jess.zaikova@gmail.com</a>
      </div>
      <div className={"footer-line"} />
      <div className={"footer-copyright"}>
        © Jess Zaikova 1989–
        <script>{"document.write(new Date().getFullYear())"}</script>
      </div>
    </footer>
  );
};
