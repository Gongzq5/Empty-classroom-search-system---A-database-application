const db = require('../controllers/roomDatabase')
const router = require('koa-router')()
const num2week = require('../controllers/numer2weekday')
const util = require('util')

router.prefix('/index')

router.get('/', async (ctx, next) => {
  // if (ctx.cookies.get('logIn')) {
  //   ctx.render('userInfo', username)
  // } else {
    await ctx.render('administerLogin')
  // }
})

router.post('/', async(ctx, next) => {
  username = ctx.request.body.username 
  password = ctx.request.body.password

  /*
    在数据库中查询是否存在，并返回
    {
      是否存在      => bool,
      是否为管理员   => bool
    }
  */
  let dbQueryResult = await db.queryUser(username, password)
  console.log("dbQueryResult: ")
  console.log(dbQueryResult)
  let userQueryResult = {
    'Exist' : !(util.isUndefined(dbQueryResult) || dbQueryResult.length == 0),
    'Administer' : false
  };
  if (userQueryResult.Exist) {
    ctx.cookies.set('logIn', 'true', {
      httpOnly: false
    })
    ctx.cookies.set('username', username, {
      httpOnly: false
    })
    if (userQueryResult.Administer) {
      ctx.cookies.set('Administer', 'true', {
        httpOnly: false
      })
    }
    ctx.redirect('/')
  } else {
    await ctx.render('WrongLogin', {
      'info': '可能是用户名或密码错误'
    })
  }
})


module.exports = router
