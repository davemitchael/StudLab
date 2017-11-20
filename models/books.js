const mongoose = require('../libs/dbConnections'),Schema = mongoose.Schema;

let schema = new Schema({
    name : {
        type: String,
        required : true
    },
    description : {
        type: String,
        required : true
    },
    author : {
        type: String,
        required : true
    },
    year : {
        type: Number,
        required : true
    },
    kind : {
        type: String,
        required : true
    },
    path : {
        type: String,
        required : true
    },
    created : {
        type: Date,
        default: Date.now
        }

});

exports.Book = mongoose.model('Book',schema);