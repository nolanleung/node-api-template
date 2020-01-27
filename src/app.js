'use strict';
const Koa = require('koa');
const routes = require('./routes');

const app = new Koa();

routes.init(app);

process.on('unhandledRejection', e => {
  console.log(e);
});

module.exports = app;
