#!/usr/bin/env node

import yargs from "yargs";

yargs
  .scriptName("pyro")
  .commandDir("cmds")
  .demandCommand()
  .help().argv;
