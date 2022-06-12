import { COMMAND } from "../constants"

const cacheReducer = (state, action) => {
  switch (action.type) {
    case COMMAND.INCR:
      return {
        ...state,
        [action.key]: state[action.key] + 1
      }

    case COMMAND.SET:
      return {
        ...state,
        [action.key]: action.value
      }

    default:
      return state
  }
}

export default cacheReducer