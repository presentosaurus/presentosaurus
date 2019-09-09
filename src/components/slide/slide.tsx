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
        <div class="slide-title">
          <slot name="slide-title">
            <h2>{this.slideTitle}</h2>
          </slot>
        </div>
        <pyro-slide-content>
          <slot />
        </pyro-slide-content>
      </Host>
    );
  }
}
