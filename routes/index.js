const express = require('express');
const router = express.Router();
const Course  = require('../models/Course').Course;
const typeWork = require('../models/TypeWork').TypeWork;
const variants = require('../models/Variant').Variant;
//const NumberOfCourse = require('../models/NumberOfCourse').NumberOfCourse;
//let numberOfCourse = new NumberOfCourse();

router.get('/',function (req,res,next) {
    res.header('Access-Control-Allow-Origin', "*");

    let options = {};

    Course.find({},{course:1},(err,data)=>{
        if(err){ next(err); }
        options.courses = data;
    }).then(()=>{
        typeWork.find({},{name:1},(err,data)=>{
            if(err){ next(err); }
            options.typeWorks = data;
        }).then(()=>{
            variants.find({},{variantNumber:1},(err,data)=>{
                if(err){ next(err); }
                options.variants = data;

            }).then(()=>{
                res.send(options);
            })
        })
    });


});


function getAllOptions(){


}


module.exports = router;