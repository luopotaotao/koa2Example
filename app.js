/**
 * Created by tt on 2016/11/4.
 */
'use strict'
const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser')();
const serve = require('koa-static2');
const session = require('koa-session-minimal');
const res_json = require('./middleware/res_json');
const nunjacks_render = require('./middleware/nunjacks_render');
const global_err = require('./middleware/global_err');


var index = require('./routers/index.js');
var form = require('./routers/form.js');
var hello = require('./routers/hello.js');
var resource = require('./routers/resource.js');
var json = require('./routers/json.js');
var nunjuncks = require('./routers/nunjuncks.js');
var crud = require('./routers/crud.js');
var err = require('./routers/err.js');

const app = new Koa();

//日志输出
app.use(async(ctx,next)=>{
    console.log(`Process ${ctx.request.method}:${ctx.request.url}...`);
    await next();
});

//静态资源
app.use(serve('static',`${__dirname}/resources`));

//session设置
app.use(session({
    key:'SESSIONID'
}));

//form表单解析
app.use(bodyParser);
app.use(nunjacks_render(`${__dirname}/views`));
app.use(global_err());

//json输出
app.use(res_json());
app.use(index.routes());
app.use(form.routes());
app.use(hello.routes());
app.use(resource.routes());
app.use(json.routes());
app.use(nunjuncks.routes());
app.use(crud.routes());
app.use(err.routes());


app.listen(3000);
