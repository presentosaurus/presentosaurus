import { Component, h, Prop, State, Host, Element } from "@stencil/core";

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

  componentDidRender() {
    Array.from(this.host.children).forEach(child =>
      child.classList.remove("active")
    );
    Array.from(this.host.children)[this.activeIndex].classList.add("active");
  }

  incrementActiveIndex() {
    const maxIndex = Array.from(this.host.children).length - 1;
    if (this.activeIndex < maxIndex) {
      changeActiveIndex(1);
    }
  }

  decrementActiveIndex() {
    if (this.activeIndex > 0) {
      changeActiveIndex(-1);
    }
  }

  handleKeyDown = (event: KeyboardEvent) => {
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
      default:
        return;
    }

    event.preventDefault();
  };

  componentDidLoad() {
    document.addEventListener("keydown", this.handleKeyDown);
    window.onhashchange = () => {
      this.activeIndex = getActiveIndex();
    };
  }

  render() {
    return (
      <Host>
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
        <pyro-controls presentationElement={this.host}></pyro-controls>
      </Host>
    );
  }
}
