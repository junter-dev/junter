import { Param } from '../../types/param'

export const parseParams = (params?: Param): { props: any; content: any } => {
  if (typeof params === 'string' || typeof params === 'number') {
    return {
      props: null,
      content: params.toString(),
    }
  }

  if (Array.isArray(params)) {
    return {
      props: null,
      content: params.map((param) => parseParams(param)),
    }
  }

  if (params && Object.prototype.hasOwnProperty.call(params, 'content')) {
    const { props, content } = params || {}

    return {
      props,
      content: parseParams(content).content,
    }
  }

  const { props, ...content } = params || {}

  return { props, content }
}
