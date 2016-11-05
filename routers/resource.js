/**
 * Created by tt on 2016/11/4.
 */
'use strict'
const router = require('koa-router')();

router.prefix('/resource')
    .get('/', async(ctx, next)=> {
        ctx.render('example/resource');
    });

module.exports = router;