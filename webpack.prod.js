/* eslint-disable no-undef */
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "production",
  target: "browserslist",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: '@import "src/styles/_variables.scss";',
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: "true",
      __VUE_PROD_DEVTOOLS__: "false",
    }),
  ],
});
