/**
 * Created by tt on 2016/11/4.
 */
'use strict'
const router = require('koa-router')();

router.prefix('/nunjuncks')
    .get('/:name', async(ctx, next)=> {
        var name = ctx.params.name;
        ctx.render('example/nunjuncks', {title: name});
    });

module.exports = router;