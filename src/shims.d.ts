declare interface Window {
  // extend the window
}

declare module "*.md" {
  import { ComponentOptions } from "vue";
  const Component: ComponentOptions;
  export default Component;
}
