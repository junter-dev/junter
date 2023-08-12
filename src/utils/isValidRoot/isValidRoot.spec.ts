import { isValidRoot } from './index'

describe('isValidRoot Func', () => {
  test('it should return true if argument is an object (not array) and contains only one element', () => {
    expect(isValidRoot({ p: 'Hi!' })).toBeTruthy()
    expect(isValidRoot({ p: 'Hi!', span: 'Hi!' })).toBeFalsy()
    expect(isValidRoot({})).toBeFalsy()
    expect(isValidRoot(0)).toBeFalsy()
    expect(isValidRoot('')).toBeFalsy()
    expect(isValidRoot([])).toBeFalsy()
  })
})
