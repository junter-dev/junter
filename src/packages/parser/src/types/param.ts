export type Param =
  | string
  | number
  | string[]
  | number[]
  | ({ props: any } & Record<string, any>)
