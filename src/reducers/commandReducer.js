import { COMMAND } from '../constants'

export const INITIAL_COMMAND = { type: COMMAND.PING }

const commandReducer = (state = INITIAL_COMMAND, { type, ...params }) => {
  switch (type) {
    case COMMAND.PING:
      return { type: COMMAND.PING }

    case COMMAND.INCR:
      return {
        type: COMMAND.INCR,
        ...params
      }

    case COMMAND.SET:
      return {
        type: COMMAND.SET,
        ...params
      }

    default:
      return state
  }
}

export default commandReducer