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
