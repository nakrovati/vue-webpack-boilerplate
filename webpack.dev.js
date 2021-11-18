/* eslint-disable no-undef */
const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

const webpack = require("webpack");
module.exports = merge(common, {
  mode: "development",
  target: "web",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              additionalData: '@import "src/styles/_variables.scss";',
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    historyApiFallback: true,
    port: 8080,
    hot: true,
    client: {
      logging: "info",
      overlay: true,
      progress: true,
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: "true",
      __VUE_PROD_DEVTOOLS__: "true",
    }),
  ],
});
