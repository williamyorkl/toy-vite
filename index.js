const  Koa = require('koa');
const serveStaticPlugin = require('./plugins/server/serveStaticPlugin')
const rewriteModulePlugin = require('./plugins/server/rewriteModulePlugin');


module.exports = function createServer() {
    const app = new Koa();
    const root = process.cwd();

    // 上下文定义
    const context = {
        app,
        root
    }
    // 插件一般在这里注册
    const resolvePlugins = [
        // 重写模块路径（如：import vue from 'Vue'）
        rewriteModulePlugin,

        // 配置静态资源服务
        serveStaticPlugin
    ]

    // 然后在这里给插件传入参数
    resolvePlugins.forEach(f => f(context));


    return app;
}