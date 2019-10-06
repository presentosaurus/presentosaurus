import { Configuration } from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";
import { resolve } from "path";
import { Arguments } from "yargs";

const publicPath = resolve(__dirname, "../public");

const config = (
  env: NodeJS.ProcessEnv,
  argv: Arguments<{ slides: string }>
): Configuration => ({
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
  resolve: {
    alias: {
      mdslides: resolve(argv.slides)
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: resolve(publicPath, "index.html")
    })
  ]
});

export default config;
