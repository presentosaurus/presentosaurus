import { Component, h, Host, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "pyro-slide",
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
        <pyro-slide-content>
          <slot />
        </pyro-slide-content>
      </Host>
    );
  }
}
