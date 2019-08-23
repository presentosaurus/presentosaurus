import { Component, h } from "@stencil/core";

@Component({
  tag: "pyro-slide",
  styleUrl: "slide.css",
  shadow: true
})
export class Slide {
  render() {
    return <div>Bye, World!</div>;
  }
}
