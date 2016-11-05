/**
 * Created by tt on 2016/11/5.
 */
const nunjucks = require('nunjucks');
function template(dir) {
    nunjucks.configure(dir||'views', { autoescape: true,noCache :true });
    return async (ctx,next)=>{
        ctx.render = (template,data)=>{
            ctx.response.type = 'text/html';
            ctx.response.body = nunjucks.render(template.endsWith('.html')?template:[template,'html'].join('.'),data);
        }
        await next();
    }
}

module.exports = template;