import { CommandModule } from "yargs";
import chalk from "chalk";
import { transform } from "../transform";

const command: CommandModule<{}, { slides: string }> = {
  command: "build <slides>",
  describe: "Build HTML from markdown",
  builder: yargs =>
    yargs.positional("slides", {
      type: "string",
      default: "index.md",
      describe: "path to markdown file"
    }),
  handler: argv => {
    transform(argv.slides);
    console.log(chalk.green("Build successful."));
  }
};

module.exports = command;
