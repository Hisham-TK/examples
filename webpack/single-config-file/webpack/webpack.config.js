const path = require("path");

// "dev": "rimraf dist && webpack -w",
// "build": "rimraf dist && webpack --config webpack.prod.js",
module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack.bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 1234
  },
  mode: "development"
};
