import {
  Component,
  h,
  Prop,
  State,
  Host,
  Element,
  Listen
} from "@stencil/core";
import { toggleFullscreen } from "../../utils/fullscreen";

const INACTIVITY_TIMEOUT = 3000;

const getActiveIndex = () => Number(location.hash.slice(1));
const setActiveIndex = (activeIndex: number) =>
  location.replace(`#${activeIndex}`);
const changeActiveIndex = (change: number) =>
  setActiveIndex(getActiveIndex() + change);

@Component({
  tag: "pyro-presentation",
  styleUrl: "presentation.css"
})
export class Presentation {
  @Prop() presentationTitle: string;
  @Prop() subtitle: string;
  @Prop() author: string;
  @Prop() url: string;
  @Prop() numbering: boolean;

  @State() activeIndex: number = getActiveIndex();

  @Element() host: HTMLElement;

  inactivityTimer: number;

  @Listen("keydown")
  handleKeyDown(event: KeyboardEvent) {
    if (event.defaultPrevented) {
      return;
    }

    switch (event.key) {
      case "Left":
      case "ArrowLeft":
        this.decrementActiveIndex();
        break;
      case "Right":
      case "ArrowRight":
        this.incrementActiveIndex();
        break;
      case "f":
      case "F":
        this.handleToggleFullscreen();
      default:
        return;
    }

    event.preventDefault();
  }

  @Listen("toggleFullscreen")
  handleToggleFullscreen() {
    toggleFullscreen(this.host);
  }

  componentDidRender() {
    Array.from(this.host.children).forEach(child =>
      child.classList.remove("active")
    );
    Array.from(this.host.children)[this.activeIndex].classList.add("active");
  }

  @Listen("nextSlide")
  incrementActiveIndex() {
    const maxIndex = Array.from(this.host.children).length - 1;
    if (this.activeIndex < maxIndex) {
      changeActiveIndex(1);
    }
  }

  @Listen("previousSlide")
  decrementActiveIndex() {
    if (this.activeIndex > 0) {
      changeActiveIndex(-1);
    }
  }

  @Listen("mousemove")
  handleMouseMove() {
    if (this.inactivityTimer) {
      window.clearTimeout(this.inactivityTimer);
    }
    this.host.classList.remove("inactive");
    this.inactivityTimer = window.setTimeout(
      () => this.host.classList.add("inactive"),
      INACTIVITY_TIMEOUT
    );
  }

  componentDidLoad() {
    window.onhashchange = () => {
      this.activeIndex = getActiveIndex();
    };
  }

  render() {
    return (
      <Host tabindex="0">
        <pyro-slide no-number>
          <pyro-qrcode content={this.url}></pyro-qrcode>
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
        <pyro-controls></pyro-controls>
      </Host>
    );
  }
}
