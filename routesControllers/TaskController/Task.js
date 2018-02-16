const controllers = require("../Includer");
const async = require('async');
const fs = require('fs');

class TaskController {
    constructor(){}

    static getTaskById(id){
        return new Promise((resolve, reject) => {
            controllers.CompletedTasks._find({_id:id}).then(task=>{
                resolve(task);
            },err=>{reject(err)})
        })

    }
   static getContentFile(filePath) {
       return fs.readFile(filePath,(err,data) => {
           if(err) return err;
            return data;
        })
    }

}

module.exports = TaskController;