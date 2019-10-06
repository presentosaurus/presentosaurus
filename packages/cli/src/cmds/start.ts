import { CommandModule } from "yargs";
import Webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import config from "../webpack.config";

const command: CommandModule<{}, { slides: string }> = {
  command: "start <slides>",
  describe: "Start HTML from markdown",
  builder: yargs =>
    yargs.positional("slides", {
      type: "string",
      default: "index.md",
      describe: "path to markdown file"
    }),
  handler: argv => {
    const webpackConfig = config(process.env, argv);
    WebpackDevServer.addDevServerEntrypoints(
      webpackConfig,
      webpackConfig.devServer || {}
    );
    const compiler = Webpack(webpackConfig);
    const server = new WebpackDevServer(compiler, webpackConfig.devServer);

    server.listen(8080, "127.0.0.1", () => {
      console.log("Starting server on http://localhost:8080");
    });
  }
};

module.exports = command;
