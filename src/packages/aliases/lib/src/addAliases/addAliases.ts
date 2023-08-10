import { isValidAlias } from '../../../utils'
import { getAliasName } from '../getAliasName'
import { AddAliasesOptions } from './types'

export const addAliases = (
  object: Record<string, any>,
  { replacer, exclude = [], removeUnnecessaryAlias = true }: AddAliasesOptions
) => {
  const clonedObject = JSON.parse(JSON.stringify(object))

  const replaceValue = (objectToReplace: Record<string, any>) => {
    Object.entries(objectToReplace).forEach(([key, value]) => {
      if (typeof value !== 'string') {
        return replaceValue(value)
      }

      const aliasName = getAliasName(value)

      if (aliasName && isValidAlias(aliasName) && replacer) {
        const replacedValue = replacer[value]
        const aliasName = getAliasName(value)

        if (
          !replacedValue &&
          !exclude.includes(aliasName ?? '') &&
          removeUnnecessaryAlias
        ) {
          if (Array.isArray(objectToReplace)) {
            return objectToReplace.splice(parseInt(key), 1)
          }

          delete objectToReplace[key]
        } else {
          objectToReplace[key] = replacedValue == null ? value : replacedValue
        }
      }
    })
  }

  replaceValue(clonedObject)

  return clonedObject
}
