/**
 * Created by tt on 2016/11/5.
 */
function err_handler() {
    return async(ctx,next)=>{
        try{
            await next();
        }catch (e){
            ctx.response.status = 400;
            ctx.json({
                code:e.code||'internal:unknown_error',
                msg:e.msg||''
            });
        }
    }
}

module.exports = err_handler;