'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // http://127.0.0.1:7001/user 会映射到app/controller/user.js 的index方法上
  router.resources('users', '/users', controller.users);
  router.get('/api/table-list', controller.table.query);
  router.post('/api/table-list/add', controller.table.add);
  router.post('/api/table-list/del', controller.table.del);
  router.post('/api/table-list/upd', controller.table.upd);
};
