const mongoose = require('../libs/dbConnections'),Schema = mongoose.Schema;

let variantSchema = new Schema({
    variantNumber: {
        type: Number,
        required : true
    },
    created : {
        type: Date,
        default: Date.now()
    }
});

exports.Variant = mongoose.model('Variant',variantSchema);