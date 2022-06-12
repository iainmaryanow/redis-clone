import { COMMAND, VALUE_TYPE } from '../../constants'
import getValueType from './getValueType'

const VALUE_TYPE_TO_COMMANDS = {
  [VALUE_TYPE.INTEGER]: [COMMAND.INCR],
  [VALUE_TYPE.STRING]: [COMMAND.SET]
}

const getCommandsForValue = (value) => {
  const type = getValueType(value)
  return VALUE_TYPE_TO_COMMANDS[type] ?? []
}

export default getCommandsForValue