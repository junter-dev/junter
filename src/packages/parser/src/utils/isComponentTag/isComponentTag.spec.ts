import { isComponentTag } from './isComponentTag'

describe('is component tag', () => {
  it('component tag', () => {
    expect(isComponentTag('Avatar')).toBeTruthy()
  })

  it('element tag', () => {
    expect(isComponentTag('div')).toBeFalsy()
  })
})
