const mongoose = require('../../libs/dbConnections');
mongoose.set("debug",true);
class BaseController {
    constructor(){}

  open(callback){
        this.schema.mongoose.connection.on('open',callback);
    }
    _find(whatFind = {},options = {}){
        //this.open();
        return new Promise((resolve, reject) => {
            this.schema.find(whatFind,options,(err,data)=>{
                if(err)  reject(err);
                resolve(data);
            })
        })
    }

    closeConnection(){
        return mongoose.disconnect();
    }

}

module.exports = BaseController;