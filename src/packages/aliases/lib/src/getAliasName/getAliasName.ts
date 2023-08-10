export const getAliasName = (alias: string) => {
  const aliasObject = /^(.*?):/g.exec(alias)

  if (aliasObject) return aliasObject[1]

  return null
}
