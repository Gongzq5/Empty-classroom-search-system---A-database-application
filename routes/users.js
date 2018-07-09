const router = require('koa-router')()
let db = require('../controllers/roomDatabase')

router.prefix('/users')

router.get('/', async function (ctx, next) {
  await ctx.render('administerSignUp');
    console.log(ctx.cookies);
  next();
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response';
})

router.post('/', async function (ctx, next) {
  await db.insert({
    username: ctx.request.body.userName,
    password: ctx.request.body.phoneNumber
  })

  ctx.cookies.set('username', ctx.request.body.userName)
  ctx.cookies.set('password', ctx.request.body.phoneNumber, {
    maxAge: 20 * 1000
  })

  await ctx.render('queryResult', {
    title: 'Result is',
    data: [{
      num: 'D',
      room: '302'
    }, {
      num: 'B',
      room: '403'
    }, {
      num: 'C',
      room: '105'
    }]
  })


})

module.exports = router
