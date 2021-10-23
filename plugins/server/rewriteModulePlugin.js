// const { readBody } = require("./utils");
const fs = require("fs");
const { url } = require("inspector");
const path = require("path");

function rewriteImports(source) {
  // ...
}

module.exports = function ({ app, root }) {
  app.use(async (ctx, next) => {
    // await next();

    const { url } = ctx.request;

    if (url === "/") {
      ctx.response.type = "text/html";
      ctx.response.body = fs.readFileSync(
        path.join(root, "./web-app", "/index.html"),
        "utf-8"
      );
    } else if (url.includes(".js")) {
      // 注意路径resolve和join的区别
      ctx.response.type = "application/javascript";
      ctx.response.body = fs.readFileSync(
        path.join(root, "./web-app", url),
        "utf-8"
      );
    } else if (url.starWith("/@modules/")) {
      // ["./", "/", "../"].includes((p) => url.includes(p))
      /**
       * 解决第三方模块包引用失败问题
       * Uncaught TypeError: Failed to resolve module specifier "vue". Relative references must start with either "/", "./", or "../".
       *
       * 1. vite的处理是通过esbuild预构件后，放在.vite的目录下
       * 2. 简单模仿：可以添加 `/@modules/` 前缀
       *  1） 识别到，如果import语句没有 "/", "./", or "../"的话，就添加 /@modules/
       *  2） 解释js文件内容，如果有 /@modules/ 的import语句，就把这个包解释出来
       *  3） 解释第三方模块包出来后，通过拼接 /node_modules/，然后获取到其package.json中的 "module": "xxx/xxx/xxx.js", 这个才是真实的第三方模块包地址
       */
    }
  });
};
