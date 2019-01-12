const Welgo = require("welgo");
const Page = require("../components/page");
const Link = require("../components/link");
const { getPicture } = require("../data/index");

module.exports = class ArtPage extends Welgo.Component {
  async resolveData() {
    const { id } = this.props;

    const picture = await getPicture({ id });
    return { picture };
  }
  render() {
    const {
      picture,
      query: { backLink }
    } = this.props;

    return (
      <Page>
        <div>
          <div class="picture-image-container">
            {backLink && (
              <Link path={backLink} className="picture-back-link">
                Back to the list
              </Link>
            )}
            <div class="picture-banner-container">
              <img
                class="picture-banner"
                src={picture.big_url}
                alt={picture.title}
              />
            </div>
          </div>
          <div class="container picture-text-container">
            <h1 class="picture-title">{picture.title}</h1>
            <p>
              {picture.date}
              {" / "}
              {picture.location}
            </p>
            <div>{picture.description}</div>
          </div>
        </div>
      </Page>
    );
  }
};
