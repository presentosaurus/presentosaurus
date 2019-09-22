#!/usr/bin/env node

//import { mdToHtml } from "@pyroslides/markdown";
import chalk from "chalk";

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(chalk.red("🔥 Pyro"));
}
