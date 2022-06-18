const isPotentialInteger = require('./isPotentialInteger')

const getSecondsRemainingForTimeout = (timeout) => {
  if (!timeout) {
    return null
  }

  return Math.ceil((timeout._idleStart + timeout._idleTimeout) / 1000 - process.uptime())
}

const serializeCache = (cache) => {
  const serializedCache = {}

  Object.entries(cache).forEach(([key, { value, timeout }]) => {
    const type = isPotentialInteger(value) ? 'number' : 'string'
    const secondsRemaining = getSecondsRemainingForTimeout(timeout)
    serializedCache[key] = { value, type, timeoutRemainingSeconds: secondsRemaining }
  })

  return serializedCache
}

module.exports = serializeCache