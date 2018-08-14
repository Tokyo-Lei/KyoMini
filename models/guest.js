
var Schema = require('mongoose').Schema;

var guestSchema = new Schema({
    name: String,
    sex: String,
    email: String,
    content: String,
});

module.exports = guestSchema;