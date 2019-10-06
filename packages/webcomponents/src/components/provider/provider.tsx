import {
  Component,
  h,
  Prop,
  Listen,
  Watch,
  ComponentInterface
} from "@stencil/core";

type SubscribeCallback<T> = (el: any, prop: keyof T) => () => void;

//type T = Partial<JSX.IntrinsicElements>;
type T = { [key: string]: any };

@Component({
  tag: "pyro-provider"
})
export class Provider {
  @Prop() state: { [key: string]: any } = {};

  listeners: Map<any, keyof T> = new Map();

  @Listen("injectProps")
  handleSubscription(event: CustomEvent) {
    const unsubscribe = this.subscribe(
      event.detail,
      (event.target as any).tagName.toLowerCase()
    );
    const disconnectedCallback = event.detail.disconnectedCallback;

    event.detail.disconnectedCallback = function() {
      unsubscribe();

      if (disconnectedCallback) {
        disconnectedCallback.call(this);
      }
    };
  }

  @Watch("state")
  stateChanged() {
    this.listeners.forEach(this.updateListener);
  }

  updateListener = (prop: keyof T, instance: any) => {
    const state = this.state[prop] || {};
    Object.entries(state).forEach(([key, value]) => {
      if (instance[key] !== value) instance[key] = value;
    });
  };

  subscribe: SubscribeCallback<T> = (
    instance: ComponentInterface,
    prop: keyof T
  ) => {
    if (!this.listeners.has(instance)) {
      this.listeners.set(instance, prop);
      this.updateListener(prop, instance);
    }
    return () => {
      if (this.listeners.has(instance)) {
        this.listeners.delete(instance);
      }
    };
  };

  render() {
    <slot />;
  }
}
