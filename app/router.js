'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // http://127.0.0.1:7001/user 会映射到app/controller/user.js 的index方法上
  router.get('/user', controller.user.index);
};
