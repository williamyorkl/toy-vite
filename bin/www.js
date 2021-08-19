#! /usr/bin/env node
const createServer = require('../index');

/** 通过入口index.js创建的服务，在这里启动 */
createServer().listen(4000, () => {
    console.log('app is start port 4000: localhost:4000');
})