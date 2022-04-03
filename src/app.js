const path = require("path");
const express = require("express");

const Welgo = require("welgo");

const HomePage = require("./pages/home");
const ArtPage = require("./pages/art");
const MediaPage = require("./pages/media");
const PicturePage = require("./pages/picture");
const Page404 = require("./pages/404");

const HTMLWrapper = require("./components/wrapper");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  renderPage({ PageComponent: HomePage, res, req });
});

app.get("/art", (req, res) => {
  renderPage({ PageComponent: ArtPage, res, req });
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

app.get("/media/:id", (req, res) => {
  renderPage({
    PageComponent: PicturePage,
    res,
    req,
    props: {
      query: req.query,
      id: req.params.id
    }
  });
});

app.get("*", (req, res) => {
  res.statusCode = 404;
  renderPage({ PageComponent: Page404, res, req });
});

async function renderPage({ PageComponent, res, req, props }) {
  try {
    const meta = {};
    const resolvers = {
      req,
      meta,
      statusCode: 200
    };
    const body = await Welgo.render(<PageComponent {...props} />, resolvers);
    const page = await Welgo.render(<HTMLWrapper body={body} meta={meta} />, {
      req
    });
    res.statusCode = resolvers.statusCode;
    res.send("<!DOCTYPE html>" + page);
  } catch (e) {
    console.log("something went wrong:", e);
    res.status = 500;
    res.send("Internal Server Error");
  }
}

const IS_PRODUCTION = process.env.production === "production";
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  if (!IS_PRODUCTION) {
    console.log("");
    console.log(`app is listening at http://localhost:${PORT}`);
  }
});

process.on('SIGTERM', function () {
  server.close(function () {
    console.log('shutting down server gracefully')
    process.exit(0);
  });
});
