import { throwError } from '../../../../logger'

export const addAttributes = (
  element: HTMLElement,
  attributes: Record<string, string | number>
) => {
  throwError(
    Object.keys(attributes).length === 0,
    'An object with attributes must not be empty'
  )

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key.toLowerCase().trim(), value.toString().trim())
  })
}
