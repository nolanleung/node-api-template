'use strict';
const Router = require('@koa/router');

const controllers = require('../controllers');

const router = new Router({ prefix: '/v1' });

exports.init = app => {
  router.get('/', controllers.example.get);

  app.use(router.routes()).use(router.allowedMethods());
};
