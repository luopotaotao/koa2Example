/**
 * Created by tt on 2016/11/4.
 * 基于Sequelize,MySql的Crud示例,由于form表单不支持get,post以外的方法,需要用JQuery.ajax调用
 */
'use strict'
const ERRORS = require('../middleware/error').ERRORS;
const Pet = require('../db/database').Pet;
const router = require('koa-router')();

router.prefix('/crud')
    .get('/pets', async(ctx, next)=> {
        var pets = await Pet.findAll();
        ctx.render('example/crud_index',{pets:pets});
    })
    .post('/pets', async(ctx, next)=> {
        var body = ctx.request.body;
        try {
            var dog = await Pet.create({
                id: 'd-' + Date.now(),
                name: body.name,
                gender: body.gender,
                birth: body.birth,
                createdAt: Date.now(),
                updatedAt: Date.now(),
                version: 0
            });
        } catch (e) {
            console.log(e);
        }
        ctx.json({id: dog.id});
    })
    .del('/pets/:id', async(ctx, next)=> {
        var pet = await Pet.findById(ctx.params.id);
        if(pet&&pet.id){
            var ret = await pet.destroy();
            ctx.json({count:1});
        }else{
            throw ERRORS.NO_DATA;
        }

    })
    .put('/pets/:id', async(ctx, next)=> {
        var p = await Pet.findById(ctx.params.id);
        var ret = null;
        if (p && p.id) {
            var body = ctx.request.body;
            try {
                p.name = body.name;
                p.gender = body.gender;
                p.birth = body.birth;
                p.updatedAt = Date.now();
                p.version++;

                ret = await p.save();
            } catch (e) {
                console.log(e);
            }
            console.log(JSON.stringify(ret));
            ctx.json({count: 1});
        } else {
            throw ERRORS.NO_DATA;
        }
    })
    .get('/pets/:id', async(ctx, next)=> {
        var pet = await Pet.findById(ctx.params.id);
        if (pet && pet.id) {
            ctx.json(pet);
        } else {
            throw ERRORS.NO_DATA;
        }
    })

module.exports = router;