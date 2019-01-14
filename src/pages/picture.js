const Welgo = require("welgo");
const Page = require("../components/page");
const Link = require("../components/link");
const { getPicture } = require("../data/index");

const styles = require("./picture.sass");

module.exports = async function ArtPage({ id, query: { backLink } }, { meta }) {
  const picture = await getPicture({ id });

  if (picture) {
    const metaTitle = picture.meta_title || picture.title;
    const metaDescription = picture.meta_description || picture.description;

    meta.title = metaTitle;
    meta.description = metaDescription;
    meta.image = picture.big_url;
    meta.keywords = picture.keywords;
  }
  return (
    <Page>
      <div class={styles.container}>
        {backLink && (
          <Link path={backLink} className={styles.backlink}>
            Back to the list
          </Link>
        )}
        <div class={styles.bannerContainer}>
          <img
            class={styles.banner}
            src={picture.big_url}
            alt={picture.title}
          />
        </div>
      </div>
      <div class={`container ${styles.text}`}>
        <h1 class={styles.title}>{picture.title}</h1>
        <p>
          {picture.date}
          {" / "}
          {picture.location}
        </p>
        <div>{picture.description}</div>
      </div>
    </Page>
  );
};
