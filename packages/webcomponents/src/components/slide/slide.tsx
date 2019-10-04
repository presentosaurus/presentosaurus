import { Component, h, Host, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "pyro-slide",
  styleUrl: "slide.css"
})
export class Slide {
  @Prop() slideTitle: string;
  @Prop() backgroundColor: string;
  @Prop() backgroundImage: string;
  @Prop() backgroundIframe: string;

  @Event() injectProps: EventEmitter;

  connectedCallback() {
    this.injectProps.emit(this);
  }

  render() {
    const imageUrl = `url("${this.backgroundImage}")`;
    const style = {
      backgroundColor: this.backgroundColor,
      backgroundImage: this.backgroundImage && imageUrl
    };
    return (
      <Host style={style}>
        <div class="slide-title">
          <slot name="slide-title">
            <h2>{this.slideTitle}</h2>
          </slot>
        </div>
        <pyro-slide-content>
          <slot />
        </pyro-slide-content>
        {this.backgroundIframe && <iframe src={this.backgroundIframe} />}
      </Host>
    );
  }
}
