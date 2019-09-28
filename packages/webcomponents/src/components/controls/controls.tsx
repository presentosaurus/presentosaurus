import { Component, h, Host, Prop } from "@stencil/core";
import { toggleFullscreen } from "../../utils/fullscreen";
import fullscreen from "material-design-icons/navigation/svg/production/ic_fullscreen_24px.svg";
import fullscreenExit from "material-design-icons/navigation/svg/production/ic_fullscreen_exit_24px.svg";

@Component({
  tag: "pyro-controls",
  styleUrl: "controls.css"
})
export class Controls {
  @Prop() presentationElement: HTMLElement;

  clickHandler = () => toggleFullscreen(this.presentationElement);

  render() {
    return (
      <Host>
        <button
          class="fullscreen-button"
          type="button"
          onClick={this.clickHandler}
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
