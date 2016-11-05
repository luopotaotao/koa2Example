/**
 * Created by tt on 2016/11/4.
 */
'use strict'
const router = require('koa-router')();

router.prefix('/form')
    .get('/', async(ctx, next)=> {
        let name = ctx.session.hasOwnProperty('user') ? ctx.session.user.name : '';
        ctx.render('example/form',{user:ctx.session.user});
    })
    .post('/', async(ctx, next)=> {
        var body = ctx.request.body,
            name = body.name || '',
            password = body.password || '';
        if (name && password ) {
            ctx.session.user = {name: name};
        }
        ctx.render('example/form',{user:ctx.session.user});
    });
module.exports = router;