const Koa = require('koa');
const logger = require('./logger.js');

const app = new Koa();

const PORT = 3000

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(PORT, () => {
    logger.info('Hello!');    
});