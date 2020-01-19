import { Component, h, Host, Event, EventEmitter } from "@stencil/core";
import {
  FullscreenIcon,
  FullscreenExitIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "./icons";

@Component({
  tag: "ps-controls",
  styleUrl: "controls.css"
})
export class Controls {
  @Event() toggleFullscreen: EventEmitter;
  @Event() nextSlide: EventEmitter;
  @Event() previousSlide: EventEmitter;

  render() {
    return (
      <Host>
        <button class="control-button" onClick={this.previousSlide.emit}>
          <ChevronLeftIcon />
        </button>
        <button class="control-button" onClick={this.nextSlide.emit}>
          <ChevronRightIcon />
        </button>
        <button class="control-button" onClick={this.toggleFullscreen.emit}>
          <FullscreenIcon />
          <FullscreenExitIcon />
        </button>
      </Host>
    );
  }
}
