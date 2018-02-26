const mongoose = require('../../libs/dbConnections');
mongoose.set("debug",true);
class BaseController {
    constructor(){}

    _find(whatFind = {},options = {}){
        return new Promise((resolve, reject) => {
            this.schema.find(whatFind,options,(err,data)=>{
                if(err) return reject(err);
                return resolve(data);
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
            this.schema.find(parameters , (err, success) => {
                if (err) return reject(err);
                return resolve(success);
            }).limit(+limit)
        })
    }

    _limitAndSkip(parameters, skip, _limit){
        return new Promise((resolve, reject) => {
            this.schema.find(parameters).skip(+skip).limit(+_limit).then(tasks => {
                resolve(tasks);
            }, err => {
                reject(err)
            })
        })
    }

    _save(){
        return new Promise((resolve, reject) => {
            this.schema.save((err, success) => {
                if (err) return reject(err);
                return resolve(success);
            });
        })
    }

    _findOne(whatFind = {},options = {}) {
        return new Promise((resolve, reject) => {
            this.schema.findOne(whatFind,options,(err,data)=>{
                if(err) return reject(err);
                return resolve(data);
            })
        })
    }


}

module.exports = BaseController;