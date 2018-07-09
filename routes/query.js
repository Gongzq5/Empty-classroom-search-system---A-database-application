const roomDatabase = require('../controllers/roomDatabase')
const router = require('koa-router')()
const num2week = require('../controllers/numer2weekday')

router.prefix('/query')

router.get('/', async (ctx, next) => {
	if (Object.keys(ctx.query).length != 0) {
		/*
		在这里就是从数据库查询，并且找到数据
		*/

		let result = {
			msg : 'query ok',
			data : []
		}

		result.data = await roomDatabase.queryRoom(ctx.query)
		
		await ctx.render('queryResult', result)
	} else {
		await ctx.render('searchingPage')	
	}
})

module.exports = router
