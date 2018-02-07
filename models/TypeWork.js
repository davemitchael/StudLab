const mongoose = require('../libs/dbConnections'),Schema = mongoose.Schema;

let typeWorkSchema = new Schema({
    name : {
        type: String,
        required : true
    },
    created : {
        type: Date,
        default: Date.now
    }

});

exports.TypeWork = mongoose.model('TypeWork',typeWorkSchema);