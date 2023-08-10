export interface AddAliasesOptions {
  replacer: Record<string, string | null>
  exclude?: string[]
  removeUnnecessaryAlias?: boolean
}
