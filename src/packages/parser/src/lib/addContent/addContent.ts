import { addAliases } from '../../../../aliases'
import componentStore from '../../../../components-store/lib/src/store/store'
import { window } from '../../../../junter-dom'
import { GlobalWindow } from '../../types'
import { Param } from '../../types/param'
import { isElementTag, parseParams } from '../../utils'
import { isComponentTag } from '../../utils/isComponentTag'
import { addStyles } from '../addStyles'
import { addText } from '../addText'
import { createElement } from '../createElement'

export const addContent = (element: HTMLElement, content: any): void => {
  if (isElementTag(element, 'style')) {
    return addStyles(element, content)
  }

  if (typeof content === 'string') {
    return addText(element, content)
  }

  if (Array.isArray(content)) {
    return content.forEach((elem) => {
      addContent(element, elem)
    })
  }

  if (content && Object.prototype.hasOwnProperty.call(content, 'content')) {
    return addContent(element, content.content)
  }

  if (typeof content === 'object') {
    Object.entries(content).forEach(([tag, params]: [string, any]) => {
      if (isComponentTag(tag) && componentStore.hasComponent(tag)) {
        const { props, slots } = params

        return addContent(
          element,
          addAliases(componentStore.getComponent(tag), {
            replacer: {
              ...props,
              ...slots,
            },
          })
        )
      }

      const { content, props } = parseParams(params as Param)

      if (Array.isArray(content)) {
        if (content.every((elem) => typeof elem.content !== 'string')) {
          const child = createElement(
            tag,
            { props, content },
            window as GlobalWindow
          )

          return element.appendChild(child)
        }

        return content.forEach((elem) => {
          if (typeof elem.content === 'string') {
            const child = createElement(
              tag,
              { props, content: elem.content },
              window as GlobalWindow
            )

            element.appendChild(child)
          }
        })
      }

      const child = createElement(
        tag,
        { props, content },
        window as GlobalWindow
      )

      return element.appendChild(child)
    })
  }
}
