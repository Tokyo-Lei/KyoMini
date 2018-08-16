/*
* @ use 项目配置文件
* @ development 开发环境配置
* @ production  生产环境配置
* @ mongo && port  数据库连接配置
*/

module.exports = {

  // 开发环境
 development: {
    mongo: {
       uri: 'mongodb://localhost:27017/kyomini',
       success :'[√] mongoose数据库连接成功！',
       error : '[×] mongoose数据库连接失败,原因:'
     },
    port: process.env.PORT || 8080,
    arttemplate:{
       template:'template',
       extname:'.html',
       debug : process.env.NODE_ENV !== 'production'
    }
    web_info: '╔╗╔═╦╗──╔╦═══╦═╗╔═╦══╦═╗─╔╦══╗\n║║║╔╣╚╗╔╝║╔═╗║║╚╝║╠╣╠╣║╚╗║╠╣╠╝\n║╚╝╝╚╗╚╝╔╣║─║║╔╗╔╗║║║║╔╗╚╝║║║\n║╔╗║─╚╗╔╝║║─║║║║║║║║║║║╚╗║║║║\n║║║╚╗─║║─║╚═╝║║║║║╠╣╠╣║─║║╠╣╠╗\n╚╝╚═╝─╚╝─╚═══╩╝╚╝╚╩══╩╝─╚═╩══╝\n\n'
              +'欢迎使用KyoMini For Node.js框架 V0.0.2版\n\n'
              +'[√] npm install  依赖安装完毕！\n'
              +'[√] npm start    服务器启动成功！\n'
              +'[√] 请打开地址：http://localhost:8080',
 },


 // 生产环境配置
  production: {
    mongo: {
       uri: 'mongodb://localhost:27017/kyomini',
       success :'[√] mongoose数据库连接成功！',
       error : '[×] mongoose数据库连接失败,原因:'
     },
    port: process.env.PORT || 8080,
    arttemplate:{
       template:'template',
       extname:'.html',
       debug : process.env.NODE_ENV !== 'production'
    }
    web_info: '╔╗╔═╦╗──╔╦═══╦═╗╔═╦══╦═╗─╔╦══╗\n║║║╔╣╚╗╔╝║╔═╗║║╚╝║╠╣╠╣║╚╗║╠╣╠╝\n║╚╝╝╚╗╚╝╔╣║─║║╔╗╔╗║║║║╔╗╚╝║║║\n║╔╗║─╚╗╔╝║║─║║║║║║║║║║║╚╗║║║║\n║║║╚╗─║║─║╚═╝║║║║║╠╣╠╣║─║║╠╣╠╗\n╚╝╚═╝─╚╝─╚═══╩╝╚╝╚╩══╩╝─╚═╩══╝\n\n'
              +'欢迎使用KyoMini For Node.js框架 V0.0.2版\n\n'
              +'[√] npm install  依赖安装完毕！\n'
              +'[√] npm start    服务器启动成功！\n'
              +'[√] 请打开地址：http://localhost:8080',

  },



    // template:'template',
    // extname:'.html',
    // mongodb_url:'mongodb://localhost:27017/kyomini',
    // port : process.env.PORT || 8080,
    // debug : process.env.NODE_ENV !== 'production',
    // web_info : '╔╗╔═╦╗──╔╦═══╦═╗╔═╦══╦═╗─╔╦══╗\n║║║╔╣╚╗╔╝║╔═╗║║╚╝║╠╣╠╣║╚╗║╠╣╠╝\n║╚╝╝╚╗╚╝╔╣║─║║╔╗╔╗║║║║╔╗╚╝║║║\n║╔╗║─╚╗╔╝║║─║║║║║║║║║║║╚╗║║║║\n║║║╚╗─║║─║╚═╝║║║║║╠╣╠╣║─║║╠╣╠╗\n╚╝╚═╝─╚╝─╚═══╩╝╚╝╚╩══╩╝─╚═╩══╝\n\n'
    // +'欢迎使用KyoMini For Node.js框架 V0.0.2版\n\n'
    // +'[√] npm install  依赖安装完毕！\n'
    // +'[√] npm start    服务器启动成功！\n'
    // +'[√] 请打开地址：http://localhost:8080',
    // mongodb_success :'[√] mongoose数据库连接成功！',
    // mongodb_error :'[×] mongoose数据库连接失败,原因:'


};
