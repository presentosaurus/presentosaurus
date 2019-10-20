import { mdToHtml } from "@pyroslides/markdown";
import { defineCustomElements } from "@pyroslides/webcomponents/dist/esm/loader";
import mdslides from "mdslides";
import pyroconfig from "pyroconfig";
import "@pyroslides/webcomponents/dist/pyro/pyro.css";

defineCustomElements(window);

document.body.innerHTML = mdToHtml(mdslides, pyroconfig);
