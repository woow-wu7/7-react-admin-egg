'use strict';

const Controller = require('egg').Controller;

class TableController extends Controller {
  // 查找
  async query() {
    const { ctx } = this;
    const table = await this.ctx.service.table.getTableList(ctx.request.query);
    this.ctx.body = table
  }

  // 添加
  async add() {
    const { request } = this.ctx
    const table = await this.ctx.service.table.addTableList(request.body);
    this.ctx.body = table;
  }

  // 删除
  async del() {
    const { request } = this.ctx
    const { id } = request.body
    const table = await this.ctx.service.table.decTableList(id)
    this.ctx.body = table
  }

  // 删除
  async upd() {
    const { ctx } = this
    const table = await this.ctx.service.table.updTableList(ctx.request.body);
    this.ctx.body = table;
  }
}
module.exports = TableController;