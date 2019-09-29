import { h, FunctionalComponent } from "@stencil/core";
import { JSXBase } from "@stencil/core/internal";

export const FullscreenIcon: FunctionalComponent<
  JSXBase.SVGAttributes<SVGElement>
> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    class="fullscreen-icon"
    {...props}
  >
    <path d="M14 28h-4v10h10v-4h-6v-6zm-4-8h4v-6h6v-4H10v10zm24 14h-6v4h10V28h-4v6zm-6-24v4h6v6h4V10H28z" />
  </svg>
);

export const FullscreenExitIcon: FunctionalComponent<
  JSXBase.SVGAttributes<SVGElement>
> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    class="fullscreen-exit-icon"
    {...props}
  >
    <path d="M10 32h6v6h4V28H10v4zm6-16h-6v4h10V10h-4v6zm12 22h4v-6h6v-4H28v10zm4-22v-6h-4v10h10v-4h-6z" />
  </svg>
);

export const ChevronLeftIcon: FunctionalComponent<
  JSXBase.SVGAttributes<SVGElement>
> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <path d="M30.83 14.83L28 12 16 24l12 12 2.83-2.83L21.66 24z" />
  </svg>
);

export const ChevronRightIcon: FunctionalComponent<
  JSXBase.SVGAttributes<SVGElement>
> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <path d="M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z" />
  </svg>
);
