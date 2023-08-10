import { addAttributes } from './addAttributes'

describe('add attributes', () => {
  it('add attributes to div', () => {
    const element = document.createElement('input')
    addAttributes(element, { value: 5, type: 'text' })

    expect(element).toHaveAttribute('value', '5')
    expect(element).toHaveAttribute('type', 'text')
  })
})
