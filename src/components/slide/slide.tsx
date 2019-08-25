import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "pyro-slide",
  styleUrl: "slide.css"
})
export class Slide {
  @Prop() slideTitle: string;

  render() {
    return (
      <Host>
        <pyro-slide-content>
          <slot name="slide-title">
            <h2>{this.slideTitle}</h2>
          </slot>
          <slot />
        </pyro-slide-content>
      </Host>
    );
  }
}
