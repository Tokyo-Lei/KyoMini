module.exports = {

    template:'template',
    extname:'.html',
    // db:mongoose.connect('mongodb://127.0.0.1/blog'),
    port : process.env.PORT || 8080,
    debug : process.env.NODE_ENV !== 'production',
    web_info : '╔╗╔═╦╗──╔╦═══╦═╗╔═╦══╦═╗─╔╦══╗\n║║║╔╣╚╗╔╝║╔═╗║║╚╝║╠╣╠╣║╚╗║╠╣╠╝\n║╚╝╝╚╗╚╝╔╣║─║║╔╗╔╗║║║║╔╗╚╝║║║\n║╔╗║─╚╗╔╝║║─║║║║║║║║║║║╚╗║║║║\n║║║╚╗─║║─║╚═╝║║║║║╠╣╠╣║─║║╠╣╠╗\n╚╝╚═╝─╚╝─╚═══╩╝╚╝╚╩══╩╝─╚═╩══╝\n\n'
    +'欢迎使用KyoMini For Node.js框架 V0.0.2版\n\n'
    +'√ npm install  依赖安装完毕！\n'
    +'√ npm start    服务器启动成功！\n'
    +'√ 请打开地址：http://localhost:8080'
};