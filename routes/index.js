const express = require('express');
const router = express.Router();

const IndexController = require('../routesControllers/indexController');


router.get('/courses',function (req,res,next) {
    res.header('Access-Control-Allow-Origin', "*");
    IndexController.getCourses().then(courses=>{
        return res.status(200).send(courses);
    }, err =>{
        next(err);
    });
});

router.get('/typeWorks',function (req,res,next) {
    res.header('Access-Control-Allow-Origin', "*");
    IndexController.getTypeWorks().then(typeworks=>{
        return res.status(200).send(typeworks);
    }, err =>{
        next(err);
    });
});
router.get('/variants',function (req,res,next) {
    res.header('Access-Control-Allow-Origin', "*");
    IndexController.getVariants().then(variants=>{
        return res.status(200).send(variants);
    }, err =>{
        next(err);
    });
});

router.get('/:course',function (req,res,next) {
    res.header('Access-Control-Allow-Origin', "*");
    IndexController.getSubjectsByCourse(req.params.course).then(subjects=>{
        return res.status(200).send(subjects);
    }, err=>{next(err)});

});


module.exports = router;

