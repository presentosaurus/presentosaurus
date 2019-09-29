import { Component, h, Host, Event, EventEmitter } from "@stencil/core";
import {
  FullscreenIcon,
  FullscreenExitIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "./icons";

@Component({
  tag: "pyro-controls",
  styleUrl: "controls.css"
})
export class Controls {
  @Event() toggleFullscreen: EventEmitter;
  @Event() nextSlide: EventEmitter;
  @Event() previousSlide: EventEmitter;

  render() {
    return (
      <Host>
        <button
          class="fullscreen-button"
          type="button"
          onClick={this.previousSlide.emit}
        >
          <div>
            <ChevronLeftIcon />
          </div>
        </button>
        <button
          class="fullscreen-button"
          type="button"
          onClick={this.nextSlide.emit}
        >
          <div>
            <ChevronRightIcon />
          </div>
        </button>
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
