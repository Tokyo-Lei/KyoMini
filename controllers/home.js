//加载验证码模块
const captchapng = require('captchapng2');

module.exports = {

    //首页控制器
    async index(ctx, next) {
          await ctx.render('index',{})
    },
    //验证码控制器
    async codes(ctx, next) {

		    let rand = parseInt(Math.random() * 9000 + 1000);
		    let png = new captchapng(80, 30, rand);
		    let code = png.getBuffer();
		    ctx.body = code; 
    }
    
}