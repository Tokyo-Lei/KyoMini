/*
* @ use 项目配置文件
*/

module.exports = {



    template:'template',
    extname:'.html',
    mongodb_url:'mongodb://localhost:27017/kyomini',
    port : process.env.PORT || 8080,
    debug : process.env.NODE_ENV !== 'production',
    web_info : '╔╗╔═╦╗──╔╦═══╦═╗╔═╦══╦═╗─╔╦══╗\n║║║╔╣╚╗╔╝║╔═╗║║╚╝║╠╣╠╣║╚╗║╠╣╠╝\n║╚╝╝╚╗╚╝╔╣║─║║╔╗╔╗║║║║╔╗╚╝║║║\n║╔╗║─╚╗╔╝║║─║║║║║║║║║║║╚╗║║║║\n║║║╚╗─║║─║╚═╝║║║║║╠╣╠╣║─║║╠╣╠╗\n╚╝╚═╝─╚╝─╚═══╩╝╚╝╚╩══╩╝─╚═╩══╝\n\n'
    +'欢迎使用KyoMini For Node.js框架 V0.0.3版\n\n'
    +'[√] npm install  依赖安装完毕！\n'
    +'[√] npm start    服务器启动成功！\n'
    +'[√] 请打开地址：http://localhost:8080',
    mongodb_success :'[√] mongoose数据库连接成功！',
    mongodb_error :'[×] mongoose数据库连接失败,原因:',
    mongodb_disconnected : '[-] mongoose数据库连接已断开。'

};
