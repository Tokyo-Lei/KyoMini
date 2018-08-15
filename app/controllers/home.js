//加载验证码模块
// const captchapng = require('captchapng2');


const HomeModel = require('../models/home');








module.exports = {

    //首页控制器
    async index(ctx, next) {

        let webModel = await HomeModel.findOne({},(err,data)=>{
            if(err){
                console.log(err)
            }
        });

          await ctx.render('home/index',{
					web:webModel
		})
    },


    //首页控制器
    async about(ctx, next) {

        let webModel = await HomeModel.findOne({},(err,data)=>{
            if(err){
                console.log(err)
            }
        });

        await ctx.render('home/about',{
            web:webModel
        })
    },










    //验证码控制器
    // async codes(ctx, next) {
    //
		//     let rand = parseInt(Math.random() * 9000 + 1000);
		//     let png = new captchapng(80, 30, rand);
		//     let code = png.getBuffer();
		//     ctx.body = code;
    // }
    
}