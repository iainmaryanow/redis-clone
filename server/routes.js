const Router = require('koa-router')
const { ping, get, set, incr, decr, strlen } = require('./handlers')

const router = new Router()
router.get('/PING', ping)
router.get('/GET', get)
router.put('/SET', set)
router.put('/INCR', incr)
router.put('/DECR', decr)
router.get('/STRLEN', strlen)

module.exports = router.routes()