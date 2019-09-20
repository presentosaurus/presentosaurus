import { mdToHtml } from "../src";
import fs from "fs";

test("should render empty string as empty string", () => {
  expect(mdToHtml("")).toBe("");
});

test("should render sample slides", () => {
  const md = fs.readFileSync(`${__dirname}/__slides__/sample.md`, {
    encoding: "utf8"
  });
  expect(mdToHtml(md)).toMatchSnapshot();
});
