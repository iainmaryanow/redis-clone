const { ping, set, get, incr } = require('../handlers')
const cache = require('../cache')

let next

beforeEach(() => {
  next = jest.fn()
})

afterEach(() => {
  cache.reset()
})

it('sets PONG when no message is given', async () => {
  const ctx = { query: {} }

  await ping(ctx, next)

  expect(ctx).toHaveProperty('body', 'PONG')
  expect(next).toHaveBeenCalled()
})

it('sets the given string when message is given', async () => {
  const message = 'test'
  const ctx = { query: { message } }

  await ping(ctx, next)

  expect(ctx).toHaveProperty('body', message)
  expect(next).toHaveBeenCalled()
})

it('increases the existing integer key by 1', async () => {
  const key = 'item'
  const value = 2
  cache.set(key, value)
  const ctx = { query: { key }, cache }

  await incr(ctx, next)

  expect(cache.get(key)).toBe(value + 1)
  expect(ctx).toHaveProperty('body', value + 1)
  expect(next).toHaveBeenCalled()
})

it('increases the existing string integer key by 1', async () => {
  const key = 'item'
  const value = '200'
  cache.set(key, value)
  const ctx = { query: { key }, cache }

  await incr(ctx, next)

  expect(cache.get(key)).toBe(201)
  expect(ctx).toHaveProperty('body', 201)
  expect(next).toHaveBeenCalled()
})

it('does not increase the cache when the key cannot be cast as an integer', async () => {
  const key = 'item'
  const value = 'bad-integer'
  cache.set(key, value)
  const ctx = { query: { key }, cache }

  await incr(ctx, next)

  expect(cache.get(key)).toBe(value)
  expect(ctx).toHaveProperty('body', `The value ${ value } for the key ${ key } is not an integer`)
  expect(next).toHaveBeenCalled()
})