'use strict';

const Controller = require('egg').Controller;

class TableController extends Controller {
  // 查找
  async query() {
    const { ctx } = this;
    // 根据id查询用户信息
    let table = await this.ctx.service.table.getTableList(ctx.request.query);
    this.ctx.body = table;
  }

  // 添加
  async add() {
    const { ctx } = this
    let table = await this.ctx.service.table.addTableList(ctx.request.body);
    this.ctx.body = table;
  }

  // 删除
  async dec() {
    const { ctx } = this
    let table = await this.ctx.service.table.decTableList(ctx.request.body);
    this.ctx.body = table;
  }
}
module.exports = TableController;