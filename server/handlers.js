const ping = async (ctx, next) => {
  ctx.body = ctx.query.message ?? 'PONG'
  await next()
}

const get = async (ctx, next) => {
  const key = ctx.query.key
  const value = ctx.cache.get(key)
  ctx.body = value
  await next()
}

const set = async (ctx, next) => {
  const { key, value, px, nx, xx, keepttl, get } = ctx.query

  if ((nx && xx) || (px && keepttl)) {
    // Bad query
    return await next()
  }

  const oldValue = ctx.cache.get(key)

  if ((nx && oldValue) || (xx && !oldValue)) {
    ctx.body = undefined
  } else {
    const isSuccessful = ctx.cache.set(key, value, px, keepttl)
    ctx.body = get ? oldValue : isSuccessful
  }

  await next()
}

const incr = async (ctx, next) => {
  try {
    ctx.body = ctx.cache.incr(ctx.query.key)
  } catch (error) {
    ctx.body = error.message
  }

  await next()
}

module.exports = {
  ping,
  get,
  set,
  incr
}