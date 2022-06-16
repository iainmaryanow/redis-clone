const Koa = require('koa')
const routes = require('./routes')
const cache = require('./cache')

const app = new Koa()
app.context.cache = cache
app.use(routes)

const PORT = 8001
app.listen(PORT)
console.log(`Listening on port ${PORT}`)