const express = require('express');
const router = express.Router();

const TaskController = require('../routesControllers/TaskController');

router.get('/:id',function (req,res,next) {
    res.header('Access-Control-Allow-Origin', "*");
    TaskController.getTaskById(req.params.id).then(task=>{
        res.send(task);
    },err=>{next(err)})
});

module.exports = router;