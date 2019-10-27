import { CommandModule } from "yargs";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname, basename, extname, resolve } from "path";
import { existsSync } from "fs";
import YAML from "yaml";
import chalk from "chalk";
import { mdToHtml } from "@pyroslides/markdown";

const replaceExt = (path: string, ext: string) => {
  return join(dirname(path), basename(path, extname(path)) + ext);
};

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
    const md = readFileSync(argv.slides, { encoding: "utf8" });
    const pyroconfigPath = join(
      dirname(resolve(argv.slides)),
      "pyroconfig.yml"
    );
    const pyroconfigExists = existsSync(pyroconfigPath);
    const options = pyroconfigExists
      ? YAML.parse(readFileSync(pyroconfigPath, { encoding: "utf8" }))
      : undefined;
    const html = mdToHtml(md, options, true);
    const htmlPath = replaceExt(argv.slides, ".html");
    writeFileSync(htmlPath, html);
    console.log(chalk.green("Build successful."));
  }
};

module.exports = command;
