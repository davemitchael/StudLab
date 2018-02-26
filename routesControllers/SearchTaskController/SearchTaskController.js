const controllers = require("../Includer");
const async = require('async');

class SearchTaskController {
    constructor(){}

    static searchCompletedTasks(searchParams,_skip){
        return new Promise((resolve, reject) => {
            controllers.CompletedTasks._limitAndSkip(searchParams, _skip - 5, 5).then(tasks => {
                resolve(tasks);
            }, err => {
                reject(err)
            })

        })
    }

    static getNumberOfAllTasksAndFirstFiveTasks(searchParams){
        return new Promise((resolve, reject) => {

            async.parallel({
                numberOfAllTasks : function (callback) {
                    controllers.CompletedTasks._count(searchParams).then(count => {
                        callback(null,count)
                    }, err => {
                        callback(err,null);
                    })
                },
                tasks : function (callback) {
                    SearchTaskController.searchCompletedTasks(searchParams,5).then(tasks=>{
                        callback(null,tasks);
                    });
                }

            }, function (err,result) {
                if(err) reject(err);
                resolve(result);
            })
        })
    }
}

module.exports =  SearchTaskController;