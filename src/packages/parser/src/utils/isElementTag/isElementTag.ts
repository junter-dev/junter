export const isElementTag = (element: HTMLElement, tag: string) =>
  element.nodeName.toLowerCase() === tag.toLowerCase()
