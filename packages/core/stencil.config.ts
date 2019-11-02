import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "pyro",
  globalStyle: "src/globals/variables.css",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ],
  copy: [
    {
      src: "../../../node_modules/prismjs/components",
      dest: "prismjs/components"
    }
  ]
};
