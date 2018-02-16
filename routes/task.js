const express = require('express');
const router = express.Router();
const fs = require('fs');
const TaskController = require('../routesControllers/TaskController');

router.get('/:id',function (req,res,next) {
    res.header('Access-Control-Allow-Origin', "*");
    TaskController.getTaskById(req.params.id).then(task=>{
        res.send(task[0]);
    },err=>{next(err)})
});

router.get('/taskUrl/:id', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    TaskController.getTaskById(req.params.id).then(task  => {
        res.sendFile(task[0].url);
    })

});

router.get('/download/:id', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    TaskController.getTaskById(req.params.id).then(task => {
        res.download(task[0].url, task[0].url.slice(task[0].url.indexOf(task[0].name)));
    })
});

module.exports = router;