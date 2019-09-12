import { Component, h, Host, Prop } from "@stencil/core";
import Prism from "prismjs";

@Component({
  tag: "pyro-code",
  styleUrl: "code.css"
})
export class Code {
  @Prop() language: string;
  @Prop() src: string;

  componentDidLoad() {
    Prism.fileHighlight();
    Prism.highlightAll();
  }
  render() {
    const languageClass = this.language && `language-${this.language}`;
    return (
      <Host>
        <pre data-src={this.src} class={languageClass}>
          <code>
            <slot />
          </code>
        </pre>
      </Host>
    );
  }
}
