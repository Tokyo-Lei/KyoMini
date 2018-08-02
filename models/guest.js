
var Schema = require('mongoose').Schema;

var guestSchema = new Schema({
    name: String,
    password: String,
    icon: String,
    sex: String,
    tel: String,
    qq: String,
    weixin: String,
    weibo: String,
    email: String
});

module.exports = guestSchema;