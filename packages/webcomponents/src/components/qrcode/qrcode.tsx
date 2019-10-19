import { Component, h, Prop } from "@stencil/core";
import QRCode, { QRCodeRenderersOptions } from "qrcode";

const QRCodeOptions: QRCodeRenderersOptions = {
  margin: 2
};

@Component({
  tag: "pyro-qrcode",
  styleUrl: "qrcode.css"
})
export class Qrcode {
  @Prop() content: string;

  el: HTMLCanvasElement;

  componentDidRender() {
    if (this.content) QRCode.toCanvas(this.el, this.content, QRCodeOptions);
  }

  render() {
    return (
      this.content && (
        <canvas ref={el => (this.el = el)} aria-label={this.content} />
      )
    );
  }
}
