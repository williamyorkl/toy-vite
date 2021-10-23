#! /usr/bin/env node
const createServer = require("../index");

/** 通过入口index.js创建的服务，在这里启动 */
createServer().listen(4000);
console.log("🚀 ~ file: www.js ~ line 6 ~ createServer()", createServer());

/*** 测试 */
// const Koa = require("koa");

// const app = new Koa();

// app.use(async (ctx, next) => {
//   await next();

//   ctx.response.type = "text/html";
//   ctx.response.body = "<h1>Hello, koa2!</h1>";
// });

// // 在端口3000监听:
// app.listen(3000);
// console.log("app started at port 3000...");
