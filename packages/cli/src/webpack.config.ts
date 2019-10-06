import { Configuration } from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";
import { resolve } from "path";

const publicPath = resolve(__dirname, "../public");

const config: Configuration = {
  entry: resolve(publicPath, "index.js"),
  mode: "development",
  devServer: {
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: "raw-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: resolve(publicPath, "index.html")
    })
  ]
};

export default config;
