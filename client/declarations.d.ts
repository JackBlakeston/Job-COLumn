// Necessary for scss imports to work
declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}
declare module '*.svg' {
  const content: React.ElementType<React.Component<'svg'>>;
  export default content;
}
