const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProduction ? "production" : "development",
  watch: !isProduction,
  target: "node",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "src"),
    filename: "server.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-react",
              {
                pragma: "Welgo.createElement",
                pragmaFrag: "Welgo.Fragment"
              }
            ]
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              modules: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "public/main.css"
    })
  ],
  // from here – https://codeburst.io/use-webpack-with-dirname-correctly-4cad3b265a92
  // docs – https://webpack.js.org/configuration/node/#node-__dirname
  node: {
    __dirname: false
  }
};
