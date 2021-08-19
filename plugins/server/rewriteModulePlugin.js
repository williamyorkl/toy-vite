const { readBody } = require('./utils')

function rewriteImports(source) {
    // ...
}

module.exports = function({app, root}) {
    app.use(async (ctx, next) => {
        // ctx 是中间键自带的
        await next();

        if (ctx.body && ctx.response.is('js')) {
            const content = await readBody(ctx.body);
            ctx.body = rewriteImports(content);
        }
    })
}
