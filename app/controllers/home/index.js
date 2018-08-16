
const webModel = require('../../models/webModel');
const pageModel = require('../../models/pageModel');

module.exports = {

   //首页
   async index(ctx){
      const web_db = await webModel.findOne({});
      const page_db = await pageModel.find({url:'home'});
      await ctx.render('home/index',{
        web:web_db,
        page:page_db
      });
   },

   //About
   async about(ctx){
      const web_db = await webModel.findOne({});
      await ctx.render('home/about',{web:web_db});
   }


};
