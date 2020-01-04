import {
  Component,
  h,
  Prop,
  State,
  Host,
  Element,
  Listen,
  Watch
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
  @Prop() options: object | string;

  @State() innerOptions: object = {};

  @Watch("options")
  parseOptions(options: object | string) {
    if (options) {
      this.innerOptions =
        typeof options === "object" ? options : JSON.parse(options);
    }
  }

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

  componentWillLoad() {
    this.parseOptions(this.options);
  }

  componentDidRender() {
    Array.from(this.host.children[0].children).forEach(child =>
      child.classList.remove("active")
    );
    Array.from(this.host.children[0].children)[this.activeIndex].classList.add(
      "active"
    );
  }

  @Listen("nextSlide")
  incrementActiveIndex() {
    const maxIndex = Array.from(this.host.children[0].children).length - 1;
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
        <pyro-provider state={this.innerOptions}>
          <slot />
        </pyro-provider>
        <pyro-controls></pyro-controls>
      </Host>
    );
  }
}
