const Welgo = require("welgo");

module.exports = function Page({ body, meta }, { req }) {
  const url = req.protocol + "://" + req.get("host") + req.path;
  const title = meta.title || "Jess Zaikova Art";
  const description =
    meta.description ||
    "Jess Zaikova art, photos, travel, travel blog, my music and craft. Order paint!";
  const keywords =
    meta.keywords ||
    "jess zaikova, photos, travel, prague, usa, russia, czech republic, serbia, europe";
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="copyright"
          content={`Copyright ${new Date().getFullYear()} by Jess Zaikova`}
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=no"
        />
        <meta name="author" content="Jess Zaikova" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        {meta.image && <meta property="og:image" content={meta.image} />}
        {meta.image && <meta property="og:image:type" content="image/jpeg" />}

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@jesszaikova" />
        <meta property="twitter:creator" content="@jesszaikova" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        {meta.image && <meta property="twitter:image" content={meta.image} />}
        <link rel={"stylesheet"} href="/styles.css" />
        <link rel={"stylesheet"} href="/main.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic|PT+Sans+Caption:700,400|Source+Sans+Pro:400|Raleway:300"
          rel="stylesheet"
          type="text/css"
        />
        <Icons />
      </head>
      <body dangerouslySetInnerHTML={{ __html: body }} />
    </html>
  );
};

function Icons() {
  return (
    <Welgo.Fragment>
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
    </Welgo.Fragment>
  );
}
