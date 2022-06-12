import { COMMAND } from '../constants'

export const INITIAL_CACHE = {}

const cacheReducer = (state = INITIAL_CACHE, action) => {
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