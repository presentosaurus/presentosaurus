import { Component, h, Host, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "ps-slide",
  styleUrl: "slide.css"
})
export class Slide {
  @Event() injectProps: EventEmitter;

  componentWillLoad() {
    this.injectProps.emit(this);
  }

  render() {
    return (
      <Host>
        <ps-slide-content>
          <slot />
        </ps-slide-content>
      </Host>
    );
  }
}
