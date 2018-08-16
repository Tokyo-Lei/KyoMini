
const home = require('../controllers/home/index');
const path = require('path');


module.exports = (app) => {

//首页
router.get('/', home.index);
//About
router.get('/about', home.about);






//验证码
// router.get('/code.png',home.codes);

//验证码参数配置
// router.get('/captcha.png', (ctx, next) => {
//     let code = '0123456789';
//     let length = 4;
//     let randomcode = '';
//     for (var i = 0; i < length; i++) {
//         randomcode += code[parseInt(Math.random() * 1000) % code.length];
//     }
//     let png = new captchapng(80,30,parseInt(randomcode));
//         png.color =(255,255,255,0);
//         png.color =(80,80,80,255);
//     let img = png.getBase64();
//     let codes = new Buffer(img,'base64');
//     ctx.body = codes;
// });



app.use( async (ctx, next) => {
	  try {
			await next()
			const status = ctx.status || 404
			if (status === 404) {
				ctx.throw(404)
			}
	  } catch (err) {
			ctx.status = err.status || 500
			if (ctx.status === 404) {
				  await ctx.render('common/404',{title:"404错误，找不到页面！"})
				} else {
				  await ctx.render('common/error',{error:err})
				}
	  }
})






}
