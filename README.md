# KyoMini 框架

![banner.jpg](http://www.naokiono.cc/public/banner.jpg)

## 久违了，优雅的新Web框架

此框架是Node.js上最简单的入门级框架，初学者轻易上手进行二次开发。
当然！它是免费的。

### 要求

* node版本7.x，推荐使用最新版本     

* 使用koa2，默认支持async/await，7.x以上node版本   


### 安装

第一步: 输入  `npm install  `   进行安装依赖包

第二步: 输入  `npm start`   启动就是这么简单！

### 项目配置  

* 前提:   确定本地已安装和启动mongodb，并可正常访问
   
* 数据库配置： 在/config/web-config.js中配置你的数据库信息，默认mongodb://localhost:27017/kyomini    

* 端口号port： 在/config/web-config.js中配置你的port，默认8080端口     


### 文件架构

```javascript
app
|  |-controllers   //控制器
|  |-models        //模型
|  |-router        //路由
|  |-template      //视图模板
|  app.js          //启动程序
piblic             //静态资源
|  |-home          //前台模板静态资源
|  |-admin         //后台模板静态资源
|  |-css           //css公共静态资源
|  |-js            //js 公共静态资源
|  |-img           //img公共静态资源
package.json       //依赖配置

```

### 相关模块

```javascript
Koa               //框架模块
koa-router        //路由模块
koa-logger        //日志模块
koa-static        //静态资源模块
koa-art-template  //模板模块
koa-bodyparser    //响应模块
koa-helmet        //安全模块
```

### Config配置
web-config.js
```javascript
template:'template',   //模板目录
extname:'.html',       //模板后缀
port : '8080',         //服务端口
```
