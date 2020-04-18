const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const terserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    home: ["./src/index.js", "./src/css/style_h.scss"],
    rooms: ["./src/js/rooms/rooms.js", "./src/css/style_r.scss"],
    services: ["./src/js/hotel_services/services.js", "./src/css/style_s.scss"],
    blogs: ["./src/js/blogs/blogs.js", "./src/css/style_b.scss"],
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      favicon: "./src/assets/logo.png",
      excludeChunks: ["rooms", "services", "blogs"],
      minify: {
        removeComments: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/rooms.html",
      filename: "./rooms.html",
      favicon: "./src/assets/logo.png",
      excludeChunks: ["home", "services", "blogs"],
      minify: {
        removeComments: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/services.html",
      filename: "./services.html",
      favicon: "./src/assets/logo.png",
      excludeChunks: ["home", "rooms", "blogs"],
      minify: {
        removeComments: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/blogs.html",
      filename: "./blogs.html",
      favicon: "./src/assets/logo.png",
      excludeChunks: ["rooms", "services", "home"],
      minify: {
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    // new CleanWebpackPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new terserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  devServer: {
    staticOptions: {
      headers: {
        "Cache-Control": "max-age=2628000",
      },
    },
  },
  performance: { hints: false },
};
