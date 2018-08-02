/*
 *  ╔╗╔═╦╗──╔╦═══╦═╗╔═╦══╦═╗─╔╦══╗
 *  ║║║╔╣╚╗╔╝║╔═╗║║╚╝║╠╣╠╣║╚╗║╠╣╠╝
 *  ║╚╝╝╚╗╚╝╔╣║─║║╔╗╔╗║║║║╔╗╚╝║║║
 *  ║╔╗║─╚╗╔╝║║─║║║║║║║║║║║╚╗║║║║
 *  ║║║╚╗─║║─║╚═╝║║║║║╠╣╠╣║─║║╠╣╠╗
 *  ╚╝╚═╝─╚╝─╚═══╩╝╚╝╚╩══╩╝─╚═╩══╝
 *  KyoMini For Node.js框架
 *  Author:小野直树
 *
 */


const Koa = require('koa'),
			Router = require('koa-router'),
			logger = require('koa-logger'),
			serve = require('koa-static'),
			path = require('path'),
			render = require('koa-art-template'),
			routers = require('./router'),
			app = new Koa();









	//加载路由
	routers(app);


	//静态资源处理的中间件
	app.use(serve(path.resolve(__dirname,'./public/')));	
	


	render(app, {
				root: path.join(__dirname, 'template'),//模板所在文件夹目录
				extname: '.html',//模板文件后缀名
				debug: process.env.NODE_ENV !== 'production'//调试模式
	 });

 
	 
	 
	//日志输出插件
	app.use(logger());


	app.listen(3000,function(){
		console.log('good!欢迎使用KYOMINI框架！');
	});
