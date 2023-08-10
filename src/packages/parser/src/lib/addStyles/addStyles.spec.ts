import { addStyles } from './addStyles'

describe('addStyles', () => {
  it('add styles to style element', () => {
    const element = document.createElement('style')
    addStyles(element, '.outer { color: red }')

    expect(element).toContainHTML('.outer { color: red }')
  })

  it('add styles to div element', () => {
    const element = document.createElement('div')
    addStyles(element, 'color: blue; font-weight: 500;')

    expect(element.getAttribute('style')).toBe('color: blue; font-weight: 500;')
  })
})
