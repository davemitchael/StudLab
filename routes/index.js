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


module.exports = router;

