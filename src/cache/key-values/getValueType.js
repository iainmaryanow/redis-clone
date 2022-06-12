import { VALUE_TYPE } from '../../constants'

const getValueType = (value) => {
  if (['string', 'number'].includes(typeof value)) {
    return !isNaN(parseInt(Number(value))) ? VALUE_TYPE.INTEGER : VALUE_TYPE.STRING
  }

  return undefined
}

export default getValueType