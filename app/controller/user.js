'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    // 根据id查询用户信息
    let users = await this.ctx.service.user.getUser(1);
    this.ctx.body = users;
  }
}
module.exports = UserController;