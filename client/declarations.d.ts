// Necessary for scss imports to work
declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}