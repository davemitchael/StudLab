const mongoose = require('../libs/dbConnections'),Schema = mongoose.Schema;

let subjectSchema = new Schema({
    name : {
        type: String,
        required : true
    },
    course : {
      type : Number,
      required: true
    },
    created : {
        type: Date,
        default: Date.now
    }

});

exports.Subject = mongoose.model('Subject',subjectSchema);