const express = require('express');
const router = express.Router();

const SearchTaskController = require('../routesControllers/SearchTaskController');

router.get('/:typeWork/:subject/variant/:number',function (req,res,next) {
    res.header('Access-Control-Allow-Origin', "*");
    SearchTaskController.getNumberOfAllTasksAndFirstFiveTasks({typeWork:req.params.typeWork, subject:req.params.subject,
        variant:req.params.number}).then(tasks=>{
        res.send(tasks);
    },err=>{next(err)});
});

router.get('/:typeWork/:subject/variant/:number/:pageNumber',function (req,res,next) {
    res.header('Access-Control-Allow-Origin', "*");
    SearchTaskController.searchCompletedTasks({typeWork:req.params.typeWork, subject:req.params.subject,
        variant:req.params.number},+req.params.pageNumber*5).then(tasks=>{
        res.send(tasks);
    },err=>{next(err)})
});

router.get('/:typeWork/:subject/',function (req,res,next) {
    res.header('Access-Control-Allow-Origin', "*");
    SearchTaskController.getNumberOfAllTasksAndFirstFiveTasks({typeWork:req.params.typeWork, subject:req.params.subject}).then(tasks=>{
        res.send(tasks);
    },err=>{next(err)});
});

router.get('/:typeWork/:subject/:pageNumber/',function (req,res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    SearchTaskController.searchCompletedTasks({typeWork:req.params.typeWork, subject:req.params.subject},+req.params.pageNumber*5).then(tasks=>{
        res.send(tasks);
    },err=>{next(err)})

});

module.exports = router;