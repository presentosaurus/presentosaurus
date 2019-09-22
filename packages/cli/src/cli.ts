#!/usr/bin/env node

import yargs from "yargs";

yargs
  .scriptName("pyro")
  .command({
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
  })
  .help().argv;
