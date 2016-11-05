/**
 * Created by tt on 2016/11/4.
 */
'use strict'
const router = require('koa-router')();

router.prefix('/index')
    .get('/',async(ctx,next)=>{
    ctx.render('example/index',{msg:'welcome to koa!'});
});

module.exports = router;