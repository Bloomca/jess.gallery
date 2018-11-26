const path = require("path");

require("@babel/register")({
  presets: [
    [
      // path.resolve(__dirname, "..", "node_modules", "@babel", "preset-react"),
      "@babel/preset-react",
      {
        pragma: "Welgo.createElement",
        pragmaFrag: "Welgo.Fragment"
      }
    ]
  ]
});

require("./app");
