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

let uploadTask =  TaskController.getUploadFor('tasks');
router.post('/addTask', uploadTask, function (req, res, next) {
        TaskController.addNewTask({
            name: req.body.name,
            typeWork: req.body.typeWork,
            theme: req.body.theme,
            subject: req.body.subject,
            url:  req.file.path,
            variant: +req.body.variant
        }).then(() => {
            res.status(200).send({message: "Task successfully added"});
        }, err => {
            res.status(500).send({message: err});
        });
});

module.exports = router;