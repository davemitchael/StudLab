const controllers = require("../Includer");
const async = require('async');

class TaskController {
    constructor(){}

    static getTaskById(id){
        return new Promise((resolve, reject) => {
            controllers.CompletedTasks._find({_id:id}).then(task=>{
                resolve(task);
            },err=>{reject(err)})
        })

    }
}

module.exports = TaskController;