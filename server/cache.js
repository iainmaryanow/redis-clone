let cache = {}

const isPotentialInteger = (value) => !isNaN(parseInt(Number(value)))

const reset = () => cache = {}

const get = (key) => {
  return cache.hasOwnProperty(key) ? cache[key].value : undefined
}

const set = (key, value, expirationTimeMs = null, keepTimeout = false) => {
  try {
    if (cache.hasOwnProperty(key) && !keepTimeout) {
      clearTimeout(cache[key].timeout)
    }

    const cacheValue = { value, timeout: null }

    if (expirationTimeMs) {
      cacheValue.timeout = setTimeout(() => delete cache[key], expirationTimeMs)
    }

    cache[key] = cacheValue

    return true
  } catch (error) {
    return false
  }
}

const incr = (key) => {
  if (!cache.hasOwnProperty(key)) {
    cache[key] = { value: 0, timeout: null }
  }

  const { value } = cache[key]
  if (isPotentialInteger(value)) {
    const newValue = parseInt(Number(value)) + 1
    cache[key].value = newValue
    return newValue
  }

  throw new Error(`The value ${value} for the key ${key} is not an integer`)
}

module.exports = {
  set,
  get,
  incr,
  reset
}