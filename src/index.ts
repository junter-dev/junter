import {
  GlobalWindow,
  addAliases,
  createElement,
  isComponentTag,
  parseParams,
  throwError,
  window,
} from './packages'
import componentStore from './packages/components-store/lib/src/store/store'
import { isValidRoot } from './utils'

export class Junter {
  public registerComponent = componentStore.registerComponent

  constructor() {}

  render(object: Record<string, any>, aliases: Record<string, string>) {
    const parsed = addAliases(object, { replacer: aliases })

    throwError(
      !isValidRoot(parsed),
      'Render object must be an object with once root element'
    )

    const tag = Object.keys(parsed)[0]

    if (isComponentTag(tag) && componentStore.hasComponent(tag)) {
      return componentStore.renderComponent(tag, { ...aliases, ...parsed[tag] })
    }

    return createElement(tag, parseParams(parsed[tag]), window as GlobalWindow)
  }
}
