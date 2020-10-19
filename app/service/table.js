'use strict';

const Service = require('egg').Service;

class TableService extends Service {
  // 查询
  async getTableList(params) {
    const { current, pageSize, total, ...restParams } = params

    // 1 => 获取total
    const getLength = async () => {
      const lengthStep = await await this.app.mysql.select('tablelist')
      const length = lengthStep && lengthStep.length;
      return length;
    }
    const totalLength = await getLength()

    // 2 => data
    const data = await this.app.mysql.select('tablelist', {
      where: restParams,
      limit: Number(pageSize),
      offset: (current - 1) * pageSize
    })

    return {
      data,
      total: totalLength
    }
  }

  // 添加
  async addTableList(body) {
    return await this.app.mysql.insert('tablelist', {
      ...body
    })
  }

  // 删除
  async decTableList(id) {
    return await this.app.mysql.delete('tablelist', {
      id
    })
  }

  // 修改
  async updTableList(body) {
    return await this.app.mysql.update('tablelist', {
      ...body
    })
  }
}


module.exports = TableService;