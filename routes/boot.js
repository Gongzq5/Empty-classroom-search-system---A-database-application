const roomDatabase = require('../controllers/roomDatabase')
const router = require('koa-router')()
const num2week = require('../controllers/numer2weekday')

router.get('/', async(ctx, next)=> {
	await ctx.render('boot')
})

module.exports = router;