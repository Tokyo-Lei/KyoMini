let mongoose = require('mongoose');

let pagechema = mongoose.Schema({

    title:{type:String,requied:true},
    info:{type:String,requied:true},
    keywords:{type:String,requied:true},
    description:{type:String,requied:true},
    url:{type:String,requied:true},
    content:{type:String,requied:true},
    created:{type:Date,default:Date.now},
    update:{type:Date,default:Date.now}
});

module.exports = mongoose.model('pages',pagechema);
