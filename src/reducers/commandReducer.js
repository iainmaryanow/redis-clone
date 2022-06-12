import { COMMAND } from '../constants'

export const INITIAL_COMMAND = { type: COMMAND.NONE }

const commandReducer = (state = INITIAL_COMMAND, action) => {
  switch (action.type) {
    case COMMAND.NONE:
      return {}

    case COMMAND.INCR:
      return {
        type: COMMAND.INCR,
        key: action.key
      }

    case COMMAND.SET:
      return {
        type: COMMAND.SET,
        key: action.key,
        value: action.value
      }

    default:
      return state
  }
}

export default commandReducer