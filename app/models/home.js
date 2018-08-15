let mongoose = require('mongoose');

let homechema = mongoose.Schema({

    web_title:{type:String},
    web_info:{type:String},
    web_keywords:{type:String},
    web_description:{type:String},
    web_url:{type:String},
    web_copyright:{type:String},
    web_email:{type:String},
    web_icp:{type:String}

});

module.exports = mongoose.model('websets',homechema);
