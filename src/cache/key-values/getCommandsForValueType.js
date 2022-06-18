import { COMMAND, VALUE_TYPE } from '../../constants'

const VALUE_TYPE_TO_COMMANDS = {
  [VALUE_TYPE.NUMBER]: [COMMAND.INCR],
  [VALUE_TYPE.STRING]: [COMMAND.SET]
}

const getCommandsForValueType = (valueType) => VALUE_TYPE_TO_COMMANDS[valueType] ?? []

export default getCommandsForValueType