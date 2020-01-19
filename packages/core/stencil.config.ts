import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "presentosaurus",
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
  ]
};
