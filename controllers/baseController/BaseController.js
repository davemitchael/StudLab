const mongoose = require('../../libs/dbConnections');
mongoose.set("debug",true);
class BaseController {
    constructor(){}

    _find(whatFind = {},options = {}){
        return new Promise((resolve, reject) => {
            this.schema.find(whatFind,options,(err,data)=>{
                if(err)  reject(err);
                resolve(data);
            })
        })
    }

    _count(parameters){
        return new Promise((resolve, reject) => {
            this.schema.find(parameters).count((err,count)=>{
                if(err)  reject(err);
                resolve(count);
            })
        })
    }

    _limit(parameters,limit){
        return new Promise((resolve, reject) => {
            this.schema.find(parameters).limit(+limit).then(tasks => {
                resolve(tasks);
            }, err => {
                reject(err)
            })
        })
    }

    _limitAndSkip(parameters,limit){
        return new Promise((resolve, reject) => {
            this.schema.find(parameters).skip(+limit-5).limit(+limit).then(tasks => {
                resolve(tasks);
            }, err => {
                reject(err)
            })
        })
    }

}

module.exports = BaseController;