const Welgo = require("welgo");

const styles = require("./footer.sass");

module.exports = function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <a target="_blank" href="https://www.facebook.com/jesszaikova">
          {"Facebook"}
        </a>
        <a target="_blank" href="https://www.instagram.com/jesszaikova/">
          {"Instagram"}
        </a>
        <a href="mailto:jess.zaikova@gmail.com">jess.zaikova@gmail.com</a>
      </div>
      <div className={styles.footerLine} />
      <div className={styles.footerCopyright}>
        © Jess Zaikova 1989–
        <script>{"document.write(new Date().getFullYear())"}</script>
      </div>
    </footer>
  );
};
