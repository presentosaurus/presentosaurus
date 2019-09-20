import { mdToHtml } from "../src";

test("should render empty string as empty string", () => {
  expect(mdToHtml("")).toBe("");
});
