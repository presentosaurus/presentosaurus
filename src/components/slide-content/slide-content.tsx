import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "pyro-slide-content",
  styleUrl: "slide-content.css"
})
export class SlideContent {
  render() {
    return (
      <Host>
        <slot>slide content</slot>
      </Host>
    );
  }
}
