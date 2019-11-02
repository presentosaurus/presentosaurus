import { Component, h, Host, Prop, Event, EventEmitter } from "@stencil/core";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers.min";
import "prismjs/plugins/line-highlight/prism-line-highlight.min";
import "prismjs/plugins/autoloader/prism-autoloader.min";

Prism.plugins.autoloader.languages_path = "prismjs/components/";

@Component({
  tag: "pyro-code",
  styleUrl: "code.css"
})
export class Code {
  @Prop() language: string;
  @Prop() src: string;
  @Prop() lineNumbers: boolean;
  @Prop() highlightLines: string;

  @Event() injectProps: EventEmitter;

  componentDidRender() {
    Prism.fileHighlight();
    Prism.highlightAll();
  }

  componentWillLoad() {
    this.injectProps.emit(this);
  }

  render() {
    const classNames = [];
    if (this.language) classNames.push(`language-${this.language}`);
    if (this.lineNumbers) classNames.push("line-numbers");

    return (
      <Host>
        <pre
          data-src={this.src}
          class={classNames.join(" ")}
          data-line={this.highlightLines}
        >
          <code>
            <slot />
          </code>
        </pre>
      </Host>
    );
  }
}
