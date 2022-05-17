const Router = require('koa-router')
const { ping, get, set, incr } = require('./handlers')

const router = new Router()
router.get('/PING', ping)
router.get('/GET', get)
router.put('/SET', set)
router.put('/INCR', incr)

module.exports = router.routes()