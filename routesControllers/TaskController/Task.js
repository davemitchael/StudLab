const controllers = require("../Includer");
const async = require('async');
const fs = require('fs');
const completeTask = require('../../controllers/CompletedTasks');
const basicController = require("../basicRoutesController/BasicRoutesController");

class TaskController extends basicController{
    constructor(){
        super();
    }

    static getTaskById(id){
        return new Promise((resolve, reject) => {
            controllers.CompletedTasks._findOne({_id:id}).then(task=>{
                resolve(task);
            },err=>{reject(err)})
        })

    }
   static getContentFile(filePath) {
       return fs.readFile(filePath,(err,data) => {
           if(err) return err;
            return data;
        })
    };

   static addNewTask(task) {
       return new Promise((resolve, reject) => {
           const _task = new completeTask(task);
           _task._save().then(saveModel => {
               resolve(saveModel);
           }, err => {
               reject(err);
           })
       })
    }

}

module.exports = TaskController;