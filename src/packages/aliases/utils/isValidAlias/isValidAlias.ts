import { Aliases } from '../../types'

export const isValidAlias = (alias: any) =>
  Object.values(Aliases).includes(alias)
