'use strict';

const Service = require('egg').Service;

class TableService extends Service {
  // 查询
  async getTableList(params) {
    console.log(params)
    return await this.app.mysql.select('tablelist',{
      where:  params,
      limit: 10,
      offset: 0
    })
  }

  // 添加
  async addTableList(body) {
    return await this.app.mysql.insert('tablelist', {
      ...body
    })
  }

  // 删除
  async decTableList(body) {
    return await this.app.mysql.delete('tablelist', {
      ...body
    })
  }
}


module.exports = TableService;