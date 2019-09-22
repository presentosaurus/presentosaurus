import { CommandModule } from "yargs";

const command: CommandModule = {
  command: "build <slides>",
  describe: "Build HTML from markdown",
  builder: yargs =>
    yargs.positional("slides", {
      type: "string",
      default: "index.md",
      describe: "path to markdown file"
    }),
  handler: argv => {
    console.log(`building ${argv.slides}`);
  }
};

module.exports = command;
