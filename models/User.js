const mongoose = require('../libs/dbConnections'),Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type : String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashPassword: {
        type : String,
        required: true
    },
    fotoUrl: {
        type : String,
        required: false,
        default: ""
    },
    countOfUploadTask: {
        type: Number,
        required: true,
        default: 0
    },
    created : {
        type: Date,
        default: Date.now
    }


});

exports.User = mongoose.model('User',userSchema);