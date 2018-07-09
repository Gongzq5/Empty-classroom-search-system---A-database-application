const db = require('../controllers/roomDatabase')
const router = require('koa-router')()

router.prefix('/teachers')

router.get('/', async (ctx, next) => {
	console.log("query is ")
	console.log(ctx.query)
	if (ctx.query.courseName) {
		await next()
	}
  	else await ctx.render('teachersQuery')
})

router.get('/', async(ctx, next) => {
	
	let courseName = ctx.query.courseName
	let result = await db.queryCourse(courseName)
	await ctx.render('courseResult', {
		data: result
	})
})

module.exports = router
