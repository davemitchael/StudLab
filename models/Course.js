const mongoose = require('../libs/dbConnections'),Schema = mongoose.Schema;

let courseSchema = new Schema({
    course : {
        type: Number,
        required : true
    },
    created : {
        type: Date,
        default: Date.now
    }

});

exports.Course = mongoose.model('Course',courseSchema);