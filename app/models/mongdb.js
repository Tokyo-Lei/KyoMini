/*
* @ use 数据库连接
*/
const mongoose = require('mongoose');
const config = require('../config/web-config');


//数据库地址
mongoose.connect(config.mongodb_url,{useNewUrlParser:true});
//数据库错误
mongoose.connection.on("error", (error)=> {
	console.log(config.mongodb_error + error);
});
//数据库开启
mongoose.connection.on("open", ()=> {
	console.log(config.mongodb_success);
});
//数据库断开连接
mongoose.connection.on('disconnected', function() {
  console.log(config.mongodb_disconnected);
});
