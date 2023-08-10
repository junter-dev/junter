import { window } from '../../../../junter-dom'
import { createElement } from './createElement'

describe('createElement', () => {
  it('create HTML element', () => {
    const element = createElement('a', {}, window as any)

    expect(element.tagName).toEqual('A')
  })
})
