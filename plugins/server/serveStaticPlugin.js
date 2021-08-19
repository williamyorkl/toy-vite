/** 
 * 托管静态资源服务
 *  1. 用到koa-static，传入的路径
*/


const  KoaStatic = require('koa-static');
const path = require('path');

module.exports = function(context) {
    const { app, root } = context;  // 这里拿到的上下文，是通过index.js中的插件机制引入的
    app.use(KoaStatic(root));
    app.use(KoaStatic(path.resolve(root, 'public')));
}
