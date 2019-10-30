import { CommandModule } from "yargs";
import browserSync from "browser-sync";
import { replaceExt, transform } from "../transform";

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
    const bs = browserSync.create();

    transform(argv.slides);

    bs.init({
      ui: false,
      notify: false,
      online: false,
      startPath: replaceExt(argv.slides, ".html"),
      reloadOnRestart: true,
      logFileChanges: true,
      server: true,
      files: [
        {
          match: [argv.slides, "pyroconfig.yml"],
          fn: () => {
            transform(argv.slides);
            bs.reload();
          }
        }
      ]
    });
  }
};

module.exports = command;
