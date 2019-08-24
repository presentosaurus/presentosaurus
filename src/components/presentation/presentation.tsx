import { Component, h } from "@stencil/core";

@Component({
  tag: "pyro-presentation",
  styleUrl: "presentation.css"
})
export class Presentation {
  render() {
    return (
      <div>
        <slot>Hello, World!</slot>
      </div>
    );
  }
}
