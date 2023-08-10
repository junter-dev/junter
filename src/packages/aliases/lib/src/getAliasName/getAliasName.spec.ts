import { getAliasName } from './getAliasName'

describe('get alias name', () => {
  it('get alias name', () => {
    const aliasName = getAliasName('slot:hello')

    expect(aliasName).toBe('slot')
  })
})
