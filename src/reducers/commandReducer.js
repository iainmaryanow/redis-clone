import { COMMAND } from "../constants"

const commandReducer = (state, action) => {
  switch (action.type) {
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