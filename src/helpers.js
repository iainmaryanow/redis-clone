export const getValueType = (value) => {
  if (['string', 'number'].includes(typeof value)) {
    return !isNaN(parseInt(Number(value))) ? 'integer' : 'string'
  }

  return undefined
}