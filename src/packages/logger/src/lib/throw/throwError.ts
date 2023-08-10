export const throwError = (condition: boolean, message: string | number) => {
  if (condition) throw new Error(message.toString())
}
