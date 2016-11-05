# koa2Example
***
## a koa2 async web example
### use these modules
* "koa": "2.0.0",
* "koa-bodyparser": "3.2.0",
* "koa-router": "7.0.0",
* "koa-session-minimal": "3.0.2",
* "koa-static2": "0.1.8",
* "mysql": "^2.12.0",
* "nunjucks": "^2.5.2",
* "sequelize": "^3.24.8"
### Introduction of main functions
* customed middleware
    * global error handler
    * global json response
    * integration of nunjuncks template engine
* CRUD (Sequelize,MySql) routers/crud.js
* global error handler -> routers/err.js
* accept form data -> routers/form.js
* accept path params -> routers/hello.js
* template render -> routers/index.js routers/nunjuncks.js
* JSON response -> routers/json.js
* static resource -> routers/resource.js


***
## koa2 web项目模板
### 使用以下模块
* "koa": "2.0.0",
* "koa-bodyparser": "3.2.0",
* "koa-router": "7.0.0",
* "koa-session-minimal": "3.0.2",
* "koa-static2": "0.1.8",
* "mysql": "^2.12.0",
* "nunjucks": "^2.5.2",
* "sequelize": "^3.24.8"

### 主要功能介绍
* 自定义中间件
    * 全局错误处理
    * 全局json响应
    * 集成nunjuncks模板引擎
* 增删改查(Sequelize,MySql) routers/crud.js
* 全局错误示例 routers/err.js
* 接收form表单数据 routers/form.js
* 接收路径参数 routers/hello.js
* 模板渲染 routers/index.js routers/nunjuncks.js
* JSON响应 routers/json.js
* 静态资源 routers/resource.js

