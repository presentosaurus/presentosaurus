import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "pyro-slide",
  styleUrl: "slide.css"
})
export class Slide {
  render() {
    return (
      <Host>
        <pyro-slide-content>
          <slot></slot>
        </pyro-slide-content>
      </Host>
    );
  }
}
