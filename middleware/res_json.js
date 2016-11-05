/**
 * Created by tt on 2016/11/5.
 */
function res_json() {
    return async(ctx, next)=> {
        ctx.json = function (data) {
            ctx.response.type = 'application/json';
            ctx.response.body = data;
        }
        await next();
    }
}

module.exports = res_json;