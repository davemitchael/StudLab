const express = require('express');
const router = express.Router();

const IndexController = require('../routesControllers/indexController');


router.get('/',function (req,res,next) {
    res.header('Access-Control-Allow-Origin', "*");
    IndexController.getBasicOptionsForSearch().then(options=>{
        res.send(options);
    }, err =>{
       next(err);
    });
});

router.get('/:course',function (req,res,next) {
    res.header('Access-Control-Allow-Origin', "*");
    IndexController.getSubjectsByCourse(req.params.course).then(subjects=>{
        res.send(subjects);
    }, err=>{next(err)});

});

router.get('/searchTasks/:subject/:variant',function (req,res,next) {
    res.header('Access-Control-Allow-Origin', "*");
    IndexController.searchCompletedTasks({subject:req.params.subject,variant:req.params.variant}).then(tasks=>{
        res.send(tasks);
    },err=>{next(err)});
});


router.get('/searchTasks/:subject/',function (req,res,next) {
    res.header('Access-Control-Allow-Origin', "*");
    IndexController.searchCompletedTasks({subject:req.params.subject}).then(tasks=>{
        res.send(tasks);
    },err=>{next(err)});
});

module.exports = router;

