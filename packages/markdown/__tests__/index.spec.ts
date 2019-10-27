import { mdToHtml } from "../src";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";

const slidesPath = join(__dirname, "__slides__");
const slides = readdirSync(slidesPath);

test.each(slides)("should render snapshot of %s", slide => {
  const md = readFileSync(join(slidesPath, slide), {
    encoding: "utf8"
  });
  expect(mdToHtml(md)).toMatchSnapshot();
});

test("should render document", () => {
  expect(mdToHtml("").startsWith("<!doctype html>")).toBe(false);
  expect(mdToHtml("", undefined, true).startsWith("<!doctype html>")).toBe(
    true
  );
});

test("should use document options", () => {
  expect(mdToHtml("", { document: { title: "titlestring" } }, true)).toMatch(
    "<title>titlestring</title>"
  );
});
