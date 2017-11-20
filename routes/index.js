const express = require('express');
const router = express.Router();
const NumberOfCourse = require('../models/NumberOfCourse').NumberOfCourse;

let numberOfCourse = new NumberOfCourse();

router.get('/',function (req,res,next) {
;
    NumberOfCourse.find((err,data)=>{
      if (err) next(err);
      res.render('index',{title:'Hello',array:data});
      //res.render('index',{array: data});
   });


   //res.render('index',{title:"Hello"});
  // res.render('index',{lol: "it works"});
});

module.exports = router;