/*
 *  ╔╗╔═╦╗──╔╦═══╦═╗╔═╦══╦═╗─╔╦══╗
 *  ║║║╔╣╚╗╔╝║╔═╗║║╚╝║╠╣╠╣║╚╗║╠╣╠╝
 *  ║╚╝╝╚╗╚╝╔╣║─║║╔╗╔╗║║║║╔╗╚╝║║║
 *  ║╔╗║─╚╗╔╝║║─║║║║║║║║║║║╚╗║║║║
 *  ║║║╚╗─║║─║╚═╝║║║║║╠╣╠╣║─║║╠╣╠╗
 *  ╚╝╚═╝─╚╝─╚═══╩╝╚╝╚╩══╩╝─╚═╩══╝
 *  Node.js For KyoMini框架
 *  Author:小野直树
 *  Version:1.0.0
 *  @ HomeRouters 前端路由
 *  @ AdminRouters 后端路由
 */


const Koa = require('koa'),
			path = require('path'),
			render = require('koa-art-template'),
			bodyParser = require('koa-bodyparser'),
			helmet  =  require('koa-helmet'),
			logger = require('koa-logger'),
			serve = require('koa-static'),
			HomeRouters = require('./router/index'),
			Router = require('koa-router');
		  router = new Router(),
			config = require('./config/web-config'),
      mongoose = require('mongoose'),
			db = require('./models/mongdb'),
			app = new Koa();




		  //加载helmet安全模块 防止XSS攻击等
		  app.use(helmet());
			//加载前台路由
			HomeRouters(app);
			//静态资源处理的中间件
			app.use(serve(path.resolve(__dirname,'../public/')));
			render(app, {
						root: path.join(__dirname, config.template), //模板所在文件夹目录
						extname: config.extname,   //模板文件后缀名
						debug: config.debug //调试模式
			 });
			//获取POST/GET中间件
		  app.use(bodyParser());
			//日志输出插件
			app.use(logger());

			//加载路由中间件
			app.use(router.routes());
			app.use(router.allowedMethods());

			//端口相应
			app.listen(config.port,function(){
				console.log(config.web_info);
			});
