import { Component, h, Prop, State, Host, Element } from "@stencil/core";

@Component({
  tag: "pyro-presentation",
  styleUrl: "presentation.css"
})
export class Presentation {
  @Prop() presentationTitle: string;
  @Prop() subtitle: string;
  @Prop() author: string;

  @State() activeIndex: number = 0;

  @Element() host: HTMLDivElement;

  componentDidRender() {
    Array.from(this.host.children).forEach(child =>
      child.classList.remove("active")
    );
    Array.from(this.host.children)[this.activeIndex].classList.add("active");
  }

  incrementActiveIndex() {
    const maxIndex = Array.from(this.host.children).length - 1;
    if (this.activeIndex < maxIndex) {
      this.activeIndex += 1;
    }
  }

  decrementActiveIndex() {
    if (this.activeIndex > 0) {
      this.activeIndex -= 1;
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
  }

  render() {
    return (
      <Host>
        <pyro-slide>
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
      </Host>
    );
  }
}
