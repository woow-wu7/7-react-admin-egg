'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUser(id) {
    // 根据id查询用户信息
    return await this.app.mysql.get('users', { id });
  }
}
module.exports = UserService;
