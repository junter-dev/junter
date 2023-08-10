import { isElementTag } from '../../utils'

export const addStyles = (element: HTMLElement, styles: string) => {
  if (isElementTag(element, 'style')) {
    element.appendChild(document.createTextNode(styles.trim()))
    return
  }

  element.style.cssText = styles
}
