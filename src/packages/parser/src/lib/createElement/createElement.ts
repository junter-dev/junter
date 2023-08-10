import { GlobalWindow } from '../../types'
import { addAttributes } from '../addAttributes'
import { addContent } from '../addContent'
import { Options } from './types'

export const createElement = (
  tag: string,
  options: Options,
  _window: GlobalWindow
) => {
  const { document } = _window
  const { props, content } = options || {}

  const element = document.createElement(tag)

  if (content) addContent(element, content)
  if (props) addAttributes(element, props)

  return element
}
