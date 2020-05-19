const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    publicPath: "/",
    path: path.resolve(process.cwd(), "www"),
    filename: "[name].bundle.js",
  },
  devtool: "source-map",
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /src\.js/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/, //css files
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/, // scss & css files
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1 },
          },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        //output all in path: assets/images/[name]-[sha512:hash:base64:7].[ext]
        test: /\.(jpe?g|png|gif)$/, // all image files
        loader: "url-loader",
        query: {
          limit: 10000,
          name: "assets/images/[name]-[sha512:hash:base64:7].[ext]",
        },
      },
      {
        //output all in path: assets/images/[name]-[sha512:hash:base64:7].[ext]
        test: /\.svg$/, // all image files
        loader: "file-loader",
        query: {
          limit: 10000,
          name: "assets/images/[name].[ext]",
        },
      },
      {
        //output all in path: assets/font/[name]-[sha512:hash:base64:7].[ext]
        test: /\.(ttf|eot|woff|woff2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, // all font files
        loader: "file-loader",
        query: {
          limit: 10000,
          name: "assets/font/[name]-[sha512:hash:base64:7].[ext]",
        },
      },
      {
        type: "javascript/auto",
        test: /(en-US|zh-HK)\.json$/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 10000,
              name: "assets/Config/[name].[ext]",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      chunksSortMode: function (a, b) {
        var order = ["main", "vendors"];
        return order.indexOf(a.names[0]) - order.indexOf(b.names[0]);
      },
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].css",
      chunkFilename: "assets/css/[id].css",
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    host: "localhost",
    historyApiFallback: true,
    open: true,
    https: true,
  },
};
