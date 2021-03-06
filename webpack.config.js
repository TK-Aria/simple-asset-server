/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const GasPlugin = require("gas-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: false,
  context: __dirname,
  entry: "./sources/index.ts",
  output: {
    path: path.join(__dirname, ".googleapp"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        enforce: "pre",
        test: /\.[tj]s$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
    ],
  },
  plugins: [new GasPlugin()],
};
