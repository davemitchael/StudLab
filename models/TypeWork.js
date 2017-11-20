const mongoose = require('../libs/dbConnections'),Schema = mongoose.Schema;

let schema = new Schema({
    name : {
        type: String,
        required : true
    },
    created : {
        type: Date,
        default: Date.now
    }

});

exports.Type = mongoose.model('Type',schema);