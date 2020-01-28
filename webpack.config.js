const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const path = require("path");
module.exports = {
  mode: "production",
  entry: {
    home: "./src/index.js",
    rooms: "./src/js/rooms.js",
    services: "./src/js/services.js",
    blogs: "./src/js/blogs.js"
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      favicon: "./src/assets/logo.png",
      minify: {
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      template: "./src/rooms.html",
      filename: "./rooms.html",
      favicon: "./src/assets/logo.png",
      minify: {
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      template: "./src/services.html",
      filename: "./services.html",
      favicon: "./src/assets/logo.png",
      minify: {
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      template: "./src/blogs.html",
      filename: "./blogs.html",
      favicon: "./src/assets/logo.png",
      minify: {
        removeComments: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
    // new CleanWebpackPlugin()
  ],
  performance: { hints: false }
};
