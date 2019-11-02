declare global {
  interface Document {
    webkitExitFullscreen: () => Promise<void>;
    mozCancelFullScreen: () => Promise<void>;
    msExitFullscreen: () => Promise<void>;
    webkitFullscreenElement: Element;
    mozFullScreenElement: Element;
    msFullscreenElement: Element;
  }
  interface HTMLElement {
    webkitRequestFullscreen: (options?: FullscreenOptions) => Promise<void>;
    mozRequestFullScreen: (options?: FullscreenOptions) => Promise<void>;
    msRequestFullScreen: (options?: FullscreenOptions) => Promise<void>;
  }
}

export const requestFullscreen = (
  element: HTMLElement = document.documentElement
) => {
  const request =
    element.requestFullscreen ||
    element.webkitRequestFullscreen ||
    element.mozRequestFullScreen ||
    element.msRequestFullScreen;

  if (typeof request === "function") {
    request.call(element);
  }
};

export const exitFullscreen = () => {
  const exit =
    document.exitFullscreen ||
    document.msExitFullscreen ||
    document.mozCancelFullScreen ||
    document.webkitExitFullscreen;

  if (typeof exit === "function") {
    exit.call(document);
  }
};

export const getFullscreenElement = () =>
  document.fullscreenElement ||
  document.mozFullScreenElement ||
  document.webkitFullscreenElement ||
  document.msFullscreenElement;

export const isFullscreen = () => !!getFullscreenElement();

export const toggleFullscreen = (element?: HTMLElement) => {
  if (isFullscreen()) {
    exitFullscreen();
  } else {
    requestFullscreen(element);
  }
};
