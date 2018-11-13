
var router = require('koa-router')();

router.get('/App/login', async (ctx, next) => {
    await ctx.render('App/login', { title: new Date() })
});
router.get('/App/numAdd', async (ctx, next) => {
    await ctx.render('App/numAdd', { title: new Date() })
});
router.get('/App/gold', async (ctx, next) => {
    await ctx.render('App/gold', { title: new Date() })
});
router.get('/App/logo', async (ctx, next) => {
    await ctx.render('App/logo', { title: new Date() })
});
router.get('/user/set', async (ctx, next) => {
    await ctx.render('user/set', { title: new Date() })
});
router.get('/user/index', async (ctx, next) => {
    await ctx.render('user/index', { title: new Date() })
});
router.get('/reactserver/index', async (ctx, next) => {
    await ctx.render('reactserver/index', { title: new Date() })
});

module.exports =  router;