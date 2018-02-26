const mongoose = require('mongoose');
const options = {
    "server":{
        "socketOptions":{
            "keepAlive": 1
        }
    }
};
mongoose.connect("mongodb://localhost:27017/studLabDB",options,(err)=>{
    if(err) {
        throw err;
    }

    console.log('Successfully connected');
});

module.exports = mongoose;
