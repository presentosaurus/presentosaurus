import { mdToHtml } from "../src";
import fs from "fs";
import { join } from "path";

const slidesPath = join(__dirname, "__slides__");
const slides = fs.readdirSync(slidesPath);

test.each(slides)("should render snapshot of %s", slide => {
  const md = fs.readFileSync(join(slidesPath, slide), {
    encoding: "utf8"
  });
  expect(mdToHtml(md)).toMatchSnapshot();
});
