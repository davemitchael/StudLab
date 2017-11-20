const mongoose = require('../libs/dbConnections'),Schema = mongoose.Schema;

let schema = new Schema({
    Number : {
        type: Number,
        required : true
    },
    created : {
        type: Date,
        default: Date.now
    }

});

exports.Option = mongoose.model('Option',schema);