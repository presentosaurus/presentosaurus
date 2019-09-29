import { Component, h, Host, Event, EventEmitter } from "@stencil/core";
import { FullscreenIcon, FullscreenExitIcon } from "./icons";

@Component({
  tag: "pyro-controls",
  styleUrl: "controls.css"
})
export class Controls {
  @Event() toggleFullscreen: EventEmitter;

  render() {
    return (
      <Host>
        <button
          class="fullscreen-button"
          type="button"
          onClick={this.toggleFullscreen.emit}
        >
          <div>
            <FullscreenIcon />
            <FullscreenExitIcon />
          </div>
        </button>
      </Host>
    );
  }
}
