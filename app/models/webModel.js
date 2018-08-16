let mongoose = require('mongoose');

let webchema = mongoose.Schema({

    title:{type:String},
    info:{type:String},
    keywords:{type:String},
    description:{type:String},
    url:{type:String},
    copyright:{type:String},
    email:{type:String},
    icp:{type:String}

});

module.exports = mongoose.model('websets',webchema);
