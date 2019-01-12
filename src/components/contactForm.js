const Welgo = require("welgo");

module.exports = class ContactForm extends Welgo.Component {
  render() {
    return (
      <div style="margin-bottom: 40px;">
        Write me to{" "}
        <a href="mailto:jess.zaikova@gmail.com">jess.zaikova@gmail.com</a> if
        you have any questions, or you want a commission!
      </div>
    );
  }
};
