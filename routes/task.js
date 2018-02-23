const express = require('express');
const router = express.Router();
const fs = require('fs');
const TaskController = require('../routesControllers/TaskController');

router.get('/:id',function (req,res,next) {
    res.header('Access-Control-Allow-Origin', "*");
    TaskController.getTaskById(req.params.id).then(task=>{
        return  res.status(200).send(task);
    },err=>{next(err)})
});

router.get('/taskUrl/:id', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    TaskController.getTaskById(req.params.id).then(task  => {
        return res.status(200).sendFile(task.url);
    })

});

router.get('/download/:id', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    TaskController.getTaskById(req.params.id).then(task => {
        return res.download(task.url, task.url.slice(task.url.indexOf(task.name)));
    })
});

router.post('/addTask',function (req, res, next) {

    let upload =  TaskController.getUploadFor('tasks');
    if (req.body.task) {
        TaskController.addNewTask(req.body.task).then((user) => {
            user.set({url: req.file.path});
            user.save();
            res.status(200).send({message: "Task successfully added"});
        }, err => {
            res.status(500).send({message: err});
        });
    }
    upload(req, res, function (err) {
        if(err) {
            return res.status(501).json({error:err});
        }
    });


});

module.exports = router;