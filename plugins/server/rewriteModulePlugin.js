const { readBody } = require("./utils");

function rewriteImports(source) {
  // ...
}

module.exports = function ({ app, root }) {
  // app, root是解构外面传入的context
  app.use(async (ctx, next) => {
    // ctx 是koa中间件callback的请求上下文对象（可以理解成express中的res和req的结合）
    await next();

    if (ctx.body && ctx.response.is("js")) {
      const content = await readBody(ctx.body);
      ctx.body = rewriteImports(content);
    }
  });
};
