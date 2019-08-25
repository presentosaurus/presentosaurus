import { Component, h, Prop, Host } from "@stencil/core";

@Component({
  tag: "pyro-presentation",
  styleUrl: "presentation.css"
})
export class Presentation {
  @Prop() presentationTitle: string;
  @Prop() subtitle: string;
  @Prop() author: string;

  render() {
    return (
      <Host>
        <pyro-slide>
          <div>
            <slot name="presentation-title">
              <h1>{this.presentationTitle}</h1>
            </slot>
            <slot name="subtitle">
              <h2>{this.subtitle}</h2>
            </slot>
            <slot name="author">
              <h3>{this.author}</h3>
            </slot>
          </div>
        </pyro-slide>
        <slot />
      </Host>
    );
  }
}
