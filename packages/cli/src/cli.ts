#!/usr/bin/env node

import yargs from "yargs";

yargs
  .scriptName("presentosaurus")
  .commandDir("cmds")
  .demandCommand()
  .help().argv;
