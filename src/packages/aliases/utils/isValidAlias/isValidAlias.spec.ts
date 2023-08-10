import { isValidAlias } from './isValidAlias'

describe('is valid alias', () => {
  it('it should return false, bacause it is invalid slot value ("name")', () => {
    const isValid = isValidAlias('name')

    expect(isValid).toBeFalsy()
  })

  it('it should return true, bacause it is valid slot value ("locale")', () => {
    const isValid = isValidAlias('locale')

    expect(isValid).toBeTruthy()
  })
})
