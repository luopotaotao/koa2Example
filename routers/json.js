/**
 * Created by tt on 2016/11/4.
 */
'use strict'
const router = require('koa-router')();

router.prefix('/json')
   .get('/:name',async(ctx,next)=>{
    var name  = ctx.params.name;
    ctx.json({name:name});
});

module.exports = router;