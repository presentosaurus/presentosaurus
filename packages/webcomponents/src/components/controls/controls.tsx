import { Component, h, Host, Event, EventEmitter } from "@stencil/core";
import fullscreen from "material-design-icons/navigation/svg/production/ic_fullscreen_24px.svg";
import fullscreenExit from "material-design-icons/navigation/svg/production/ic_fullscreen_exit_24px.svg";

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
            <img
              src={fullscreen}
              alt="fullscreen icon"
              class="fullscreen-icon"
            ></img>
            <img
              src={fullscreenExit}
              alt="fullscreen exit icon"
              class="fullscreen-exit-icon"
            ></img>
          </div>
        </button>
      </Host>
    );
  }
}
