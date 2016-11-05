/**
 * Created by tt on 2016/11/4.
 */
'use strict'
const router = require('koa-router')();
const ERRORS = require('../middleware/error').ERRORS;
router.prefix('/error')
    .get('/', async(ctx, next)=> {
        throw ERRORS.NO_DATA;
    });

module.exports = router;