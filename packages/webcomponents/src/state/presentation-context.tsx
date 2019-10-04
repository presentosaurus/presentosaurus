import { createProviderConsumer } from "../context/state-tunnel";
import { JSX } from "../components";

export const PresentationContext = createProviderConsumer<
  Partial<JSX.IntrinsicElements>
>({});
