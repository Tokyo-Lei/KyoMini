
const webModel = require('../../models/webModel');

module.exports = {

   //首页
   async index(ctx){
      const web_db = await webModel.findOne({});
      if(!web_db) return ctx.error('没有数据！');
      await ctx.render('home/index',{web:web_db});
   },

   //About
   async about(ctx){
      const web_db = await webModel.findOne({});
      if(!web_db) return ctx.error('没有数据！');
      await ctx.render('home/about',{web:web_db});
   }


};
