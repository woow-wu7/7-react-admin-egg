# 7-react-admin-egg

### (1) Navicat
- [破解安装 - 已下载到自己的百度网盘](https://zhuanlan.zhihu.com/p/235178693)
- [使用教程](https://blog.csdn.net/sisure_shen/article/details/81042254)

### (2) MySql
- [安装-免费的社区版本-最底部-MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
- [教程](https://blog.csdn.net/qq_34889607/article/details/80613028)

### (3) egg链接数据库
- cnpm install egg-mysql -S
- [教程](https://www.jianshu.com/p/6a6f80adcb06)
- 报错：`Client does not support authentication protocol requested by server`
- 原因：mysql修改了密码的验证方式
- 解决：
  - 管理员方式打开cmd => 登陆mysql
  - 1. ` mysql -u root -p `
  - 2. ` use mysql `
  - 3. ` ALTER USER 'root'@'localhost'IDENTIFIED WITH mysql_native_password BY 'mysql密码'; `
  - 4. ` FLUSH PRIVILEGES; `

### (4) 腾讯云centos安装nginx
- [教程](https://www.cnblogs.com/wangcongxing/p/12520170.html)

### (5) 腾讯云centos安装mysql
- [教程](https://www.cnblogs.com/yangyang2018/p/10798859.html)
- [教程2](https://www.solves.com.cn/it/wlyx/fwq/2019-08-07/2919.html)

### (6) post请求报错
- [资料](https://juejin.im/post/6844904120818597895#heading-4)

### (x) 项目
- [线上](https://juejin.im/post/6844903870498357255)


