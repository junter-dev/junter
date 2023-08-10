import { addText } from './addText'

describe('add text to element', () => {
  it('adding text to h1', () => {
    const element = document.createElement('h1')

    addText(element, 'Hello')

    expect(element).toContainHTML('Hello')
  })
})
