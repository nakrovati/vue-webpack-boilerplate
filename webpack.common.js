/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "./src/main.js"),
  },
  output: {
    filename: "js/[name].[contenthash:8].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
        use: [
          {
            loader: "svgo-loader",
          },
        ],
        generator: {
          filename: "icons/[name][ext]",
        },
      },
      {
        test: /\.(png|jpe?g|webp|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(mp4|webm)$/,
        type: "asset/resource",
        generator: {
          filename: "video/[name][ext]",
        },
      },
      {
        test: /\.json$/,
        type: "asset/resource",
        generator: {
          filename: "[name][ext]",
        },
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      Assets: path.resolve(__dirname, "./src/assets/"),
      Components: path.resolve(__dirname, "./src/components/"),
      Router: path.resolve(__dirname, "./src/router/"),
      Store: path.resolve(__dirname, "./src/store/"),
      Views: path.resolve(__dirname, "./src/views/"),
      Icons: path.resolve(__dirname, "./src/assets/icons/"),
      Favicons: path.resolve(__dirname, "./src/assets/icons/favicons/"),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
      inject: true,
    }),
  ],
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    minimize: true,
    splitChunks: {
      chunks: "all",
    },
  },
};
