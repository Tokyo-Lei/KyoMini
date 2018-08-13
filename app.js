/*
 *  ╔╗╔═╦╗──╔╦═══╦═╗╔═╦══╦═╗─╔╦══╗
 *  ║║║╔╣╚╗╔╝║╔═╗║║╚╝║╠╣╠╣║╚╗║╠╣╠╝
 *  ║╚╝╝╚╗╚╝╔╣║─║║╔╗╔╗║║║║╔╗╚╝║║║
 *  ║╔╗║─╚╗╔╝║║─║║║║║║║║║║║╚╗║║║║
 *  ║║║╚╗─║║─║╚═╝║║║║║╠╣╠╣║─║║╠╣╠╗
 *  ╚╝╚═╝─╚╝─╚═══╩╝╚╝╚╩══╩╝─╚═╩══╝
 *  Node.js For KyoMini框架
 *  Author:小野直树
 *
 */


const Koa = require('koa'),
			Router = require('koa-router'),
			logger = require('koa-logger'),
			serve = require('koa-static'),
			path = require('path'),
			render = require('koa-art-template'),
			bodyParser = require('koa-bodyparser'),
			helmet  =  require('koa-helmet'),
			routers = require('./router'),
			config = require('./config/web-config'),
			app = new Koa();





    //加载helmet安全模块 防止XSS攻击等
    app.use(helmet());
   

	//加载路由
	routers(app);

  
	//静态资源处理的中间件
	app.use(serve(path.resolve(__dirname,'./public/')));	
	


	render(app, {
				root: path.join(__dirname, config.template), //模板所在文件夹目录
				extname: config.extname,   //模板文件后缀名
				debug: config.debug //调试模式
	 });

	 
	//获取POST/GET中间件
    app.use(bodyParser());
	 
	 
	//日志输出插件
	app.use(logger());

	app.listen(config.port,function(){
		console.log(config.web_info);
	});