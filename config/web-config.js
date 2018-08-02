
module.exports = {

    db:mongoose.connect('mongodb://127.0.0.1/blog'),
    port = process.env.PORT || 3000


};