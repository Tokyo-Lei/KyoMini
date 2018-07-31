const Router = require('koa-router');
const router = new Router();
const home = require('../controllers/home');



module.exports = (app) => {

//首页
router.get('/',home.index);
//验证码
router.get('/code.png',home.codes);

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


//加载路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx, next) => {
        await ctx.render('404', {
            title: '404'
        })
})

}