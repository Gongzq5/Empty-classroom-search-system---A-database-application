const db = require('../controllers/roomDatabase')
const router = require('koa-router')()

router.prefix('/signup')

router.get('/', async (ctx, next) => {
  await ctx.render('administerSignup')
})

router.post('/', async(ctx, next) => {
  console.log(ctx.request.body)
  username = ctx.request.body.username 
  password = ctx.request.body.password

  let result = await db.queryUserWithoutPassword(username)
  console.log(result.length)
  if (result.length != 0) {
    await ctx.render('WrongLogin', {
      'info': '该用户名已被占用'
    })
  } else {
    await db.insertUser(username, password)
    ctx.cookies.set('logIn', 'true', {
      httpOnly: false
    })
    ctx.cookies.set('username', username, {
      httpOnly: false
    })
    ctx.redirect('/')
  }
})

module.exports = router
