import { Configuration } from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";
import { resolve, dirname, join } from "path";
import { existsSync } from "fs";
import { Arguments } from "yargs";

const publicPath = resolve(__dirname, "../public");

const config = (
  env: NodeJS.ProcessEnv,
  argv: Arguments<{ slides: string }>
): Configuration => {
  const pyroconfigPath = join(dirname(resolve(argv.slides)), "pyroconfig.yml");
  const pyroconfigExists = existsSync(pyroconfigPath);
  return {
    entry: resolve(publicPath, "index.js"),
    mode: "development",
    devServer: {
      open: true
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
        },
        {
          test: /pyroconfig\.yml$/,
          use: "js-yaml-loader"
        }
      ]
    },
    resolve: {
      alias: {
        mdslides: resolve(argv.slides),
        pyroconfig: pyroconfigExists
          ? pyroconfigPath
          : resolve(publicPath, "pyroconfig.yml")
      }
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: resolve(publicPath, "index.html")
      })
    ]
  };
};

export default config;
