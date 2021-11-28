/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const StyleLintWebpackPlugin = require("stylelint-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src", "main.js"),
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: "asset/inline",
      },
      {
        test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new StyleLintWebpackPlugin({
      context: path.resolve(__dirname, "./src"),
      files: "**/*.{css,scss,html,vue}",
      fix: true,
    }),
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, "public/favicon.ico"),
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
      minify: true,
      inject: true,
      title: '"Vue-webpack-boilerplate" App',
    }),
  ],
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
