export const isValidRoot = (object: any) =>
  typeof object === 'object' &&
  !Array.isArray(object) &&
  Object.keys(object).length === 1
