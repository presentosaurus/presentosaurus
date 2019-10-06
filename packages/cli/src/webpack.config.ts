import { Configuration } from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";

const config: Configuration = {
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
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};

export default config;
