const Koa = require("koa");
// const serveStaticPlugin = require("./plugins/server/serveStaticPlugin");
const rewriteModulePlugin = require("./plugins/server/rewriteModulePlugin");

module.exports = function createServer() {
  const app = new Koa();
  const root = process.cwd();

  //   app.use(async (ctx, next) => {
  //     await next();
  //     ctx.response.type = "text/html";

  //     ctx.response.body = "111";
  //   });

  /** 1. 上下文定义 */
  const context = {
    app,
    root,
  };

  /** 2. 插件注册 */
  const resolvePlugins = [
    // 重写模块路径（如：import vue from 'Vue'）
    rewriteModulePlugin,
    // 配置静态资源服务
    // serveStaticPlugin
  ];

  /** 3. 逐个执行插件中间件 */
  resolvePlugins.forEach((f) => f(context));

  return app;
};
