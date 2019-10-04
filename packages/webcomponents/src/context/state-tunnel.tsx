import { ComponentInterface, FunctionalComponent } from "@stencil/core";

export type SubscribeCallback<T> = (el: any, prop: keyof T) => () => void;
export type ConsumerRenderer<T> = (
  subscribe: SubscribeCallback<T>,
  renderer: Function
) => any;

export const createProviderConsumer = <T extends { [key: string]: any }>(
  defaultState: T
) => {
  let listeners: Map<any, keyof T> = new Map();
  let currentState: T = defaultState;

  const updateListener = (prop: keyof T, instance: any) => {
    const state = currentState[prop] || {};
    Object.entries(state).forEach(([key, value]) => {
      instance[key] = value;
    });
  };

  const subscribe: SubscribeCallback<T> = (
    instance: ComponentInterface,
    prop: keyof T
  ) => {
    if (!listeners.has(instance)) {
      listeners.set(instance, prop);
      updateListener(prop, instance);
    }
    return () => {
      if (listeners.has(instance)) {
        listeners.delete(instance);
      }
    };
  };

  const Provider: FunctionalComponent<{ state: T }> = ({ state }, children) => {
    currentState = state;
    listeners.forEach(updateListener);
    return children;
  };

  const injectProps = (Cstr: any, prop: keyof T) => {
    const CstrPrototype = Cstr.prototype;
    const cstrConnectedCallback = CstrPrototype.connectedCallback;
    const cstrDisconnectedCallback = CstrPrototype.disconnectedCallback;

    CstrPrototype.connectedCallback = function() {
      subscribe(this, prop);

      if (cstrConnectedCallback) {
        return cstrConnectedCallback.call(this);
      }
    };

    CstrPrototype.disconnectedCallback = function() {
      listeners.delete(this);
      if (cstrDisconnectedCallback) {
        cstrDisconnectedCallback.call(this);
      }
    };
  };

  return {
    Provider,
    injectProps
  };
};
