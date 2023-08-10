import { throwError } from './throwError'

describe('throwError Func', () => {
  it('it should throw error if condition is true', () => {
    try {
      throwError(true, 'Test error')
    } catch (e: any) {
      expect(e.message).toBe('Test error')
    }
  })
})
