import { mdToHtml, adocToHtml } from "../src";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";

const fixturesPath = join(__dirname, "__fixtures__");
const mdslidesPath = join(fixturesPath, "markdown");
const mdslides = readdirSync(mdslidesPath);
const adocslidesPath = join(fixturesPath, "asciidoctor");
const adocslides = readdirSync(adocslidesPath);

test.each(mdslides)("should render snapshot of %s", slide => {
  const md = readFileSync(join(mdslidesPath, slide), {
    encoding: "utf8"
  });
  expect(mdToHtml(md)).toMatchSnapshot();
});

test.each(adocslides)("should render snapshot of %s", slide => {
  const md = readFileSync(join(adocslidesPath, slide), {
    encoding: "utf8"
  });
  expect(adocToHtml(md)).toMatchSnapshot();
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
