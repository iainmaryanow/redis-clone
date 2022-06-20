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
  const { key, value, ex, px, nx, xx, keepttl, get } = ctx.query

  const oldValue = ctx.cache.get(key) ?? ''

  if ((nx && oldValue) || (xx && !oldValue)) {
    ctx.body = ''
  } else {
    const isSuccessful = ctx.cache.set(key, value, ex * 1000 || px, keepttl)
    ctx.body = get ? oldValue : isSuccessful
  }

  await next()
}

const incr = async (ctx, next) => {
  try {
    ctx.body = ctx.cache.incr(ctx.query.key, Number(ctx.query.increment ?? 1))
  } catch (error) {
    ctx.body = error.message
    ctx.status = 500
  }

  await next()
}

const decr = async (ctx, next) => {
  try {
    ctx.body = ctx.cache.decr(ctx.query.key, Number(ctx.query.decrement ?? 1))
  } catch (error) {
    ctx.body = error.message
    ctx.status = 500
  }

  await next()
}

const strlen = async (ctx, next) => {
  try {
    ctx.body = ctx.cache.strlen(ctx.query.key)
  } catch (error) {
    ctx.body = error.message
    ctx.status = 500
  }

  await next()
}

module.exports = {
  ping,
  get,
  set,
  incr,
  decr,
  strlen
}