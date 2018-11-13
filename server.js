const path = require('path')
const Koa = require('koa')
const static = require('koa-static')
const xtpl = require('koa-xtpl')
const app = new Koa();

const staticPath = './src'
app.use(static(path.join(__dirname, staticPath)))

// root
app.use(xtpl(path.join(__dirname, './src/pages')))
// or options
app.use(xtpl({
  root: path.join(__dirname, './src/pages'),
  extname: 'html',
  commands: {}
}))

const router = require('./router.js');


app.use(router.routes());

const api = require('./api.js');

app.use(api.routes());

// app.use(async ctx => {
//   await ctx.render('index', { title: new Date() })
// })
 
app.listen(3000,()=>{console.log('listen 3000')})