/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1602571425008_8683';

  // add your middleware config here
  config.middleware = [];

  // 数据库配置
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: '7-react-admin-egg',

      // 在日志中打印 sql 语句
      // debug: true,
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,

  }

  // sequelize
  // config.sequelize = {
  //   dialect: 'mysql',
  //   host: '127.0.0.1',
  //   port: 3306,
  //   username: 'root',
  //   password: 'root',
  //   database: '7-react-admin-egg',
  //   define: { // model的全局配置
  //     timestamps: true, // 添加create,update,delete时间戳
  //     paranoid: true, // 添加软删除
  //     freezeTableName: true, // 防止修改表名为复数
  //     underscored: false // 防止驼峰式字段被默认转为下划线
  //   },
  //   timezone: '+8:00', // 由于orm用的UTC时间，这里必须加上东八区，否则取出来的时间相差8小时
  //   dialectOptions: { // 让读取date类型数据时返回字符串而不是UTC时间
  //     dateStrings: true,
  //     typeCast(field, next) {
  //       if (field.type === "DATETIME") {
  //         return field.string();
  //       }
  //       return next();
  //     }
  //   }
  // }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
    security: {
      csrf: {
        enable: false, // 关闭框架默认得csrf插件
      },
    },
  };
};
