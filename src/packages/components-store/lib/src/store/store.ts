import { isValidRoot } from '../../../../../utils'
import { addAliases } from '../../../../aliases'
import { window } from '../../../../junter-dom'
import { throwError } from '../../../../logger'
import { createElement, isComponentTag, parseParams } from '../../../../parser'

const store: Record<string, string> = {}

const storeActions = {
  registerComponent(name: string, content: any, aliases: Record<string, any>) {
    throwError(
      !isComponentTag(name),
      'The component name must start with a capital letter'
    )

    const component = addAliases(content, {
      replacer: aliases,
      exclude: ['slot', 'prop'],
    })

    throwError(
      !isValidRoot(component),
      `${name} component object must be an object with once root element`
    )

    store[name] = JSON.stringify(component)
  },
  renderComponent(name: string, props: Record<string, any>) {
    const { props: componentProps, slots, ...aliases } = props

    const component = addAliases(JSON.parse(store[name]), {
      replacer: {
        ...componentProps,
        ...slots,
        ...aliases,
      },
    })
    const tag = Object.keys(component)[0]

    return createElement(tag, parseParams(component[tag]), window as any)
  },
  hasComponent(tag: string) {
    return Object.prototype.hasOwnProperty.call(store, tag)
  },
  getComponent(tag: string) {
    return JSON.parse(store[tag])
  },
}

const componentStore = Object.freeze(storeActions)

export default componentStore
