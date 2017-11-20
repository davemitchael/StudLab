const express = require('express');
const router = express.Router();
const Book = require('../models/books').Book;

let book = new Book();
//let db = mongoose.connection.db;

/* GET home page. */
router.get('/', function(req, res, next) {
    Book.find((err,obj)=>{
        if(err) next(err);
        res.send(obj);
    }).limit(5);
});

router.get('/:id', function (req,res,next) {
    Book.find((err,obj)=>{
        if(err) next(err);
        res.send(obj);
    }).skip((5*req.params.id)-5).limit(5*req.params.id);
});

module.exports = router;
