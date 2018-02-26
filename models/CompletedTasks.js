const mongoose = require('../libs/dbConnections'),Schema = mongoose.Schema;

let completedTasksSchema = new Schema({
    name : {
        type: String,
        required : true,
    },
    typeWork: {
        type: String,
        required: true
    },
    theme: {
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    url : {
        type: String,
        required : true,
    },

    variant : {
        type: Number,
        required: true
    }

});

exports.CompletedTasks = mongoose.model('CompleteTask',completedTasksSchema);