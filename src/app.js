const path = require("path");
const express = require("express");

const Welgo = require("welgo");

const HomePage = require("./pages/home");
const AboutPage = require("./pages/about");
const ArtPage = require("./pages/art");
const BlogPage = require("./pages/blog");
const ArticlePage = require("./pages/article");
const MediaPage = require("./pages/media");
const MusicPage = require("./pages/music");
const Page404 = require("./pages/404");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  renderPage({ PageComponent: HomePage, res, req });
});

app.get("/about", (req, res) => {
  renderPage({ PageComponent: AboutPage, res, req });
});

app.get("/art", (req, res) => {
  renderPage({ PageComponent: ArtPage, res, req });
});

app.get("/blog", (req, res) => {
  renderPage({ PageComponent: BlogPage, res, req });
});

app.get("/blog/:id", (req, res) => {
  renderPage({ PageComponent: ArticlePage, res, req, props: req.params });
});

app.get("/photo", (req, res) => {
  renderPage({
    PageComponent: MediaPage,
    res,
    req,
    props: Object.assign(
      {
        type: "photo",
        title: "Photo"
      },
      req.query
    )
  });
});

app.get("/paint", (req, res) => {
  renderPage({
    PageComponent: MediaPage,
    res,
    req,
    props: Object.assign(
      {
        type: "art",
        title: "Drawing"
      },
      req.query
    )
  });
});

app.get("/music", (req, res) => {
  renderPage({ PageComponent: MusicPage, req, res });
});

app.get("*", (req, res) => {
  res.statusCode = 404;
  renderPage({ PageComponent: Page404, res, req });
});

async function renderPage({ PageComponent, res, req, props }) {
  try {
    const page = await Welgo.render(<PageComponent {...props} />);
    res.send(page);
  } catch (e) {
    console.log("something went wrong:", e);
    res.status = 500;
    res.send("Internal Server Error");
  }
}

const IS_PRODUCTION = process.env.production === "production";
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  if (!IS_PRODUCTION) {
    console.log("");
    console.log(`app is listening at http://localhost:${PORT}`);
  }
});
