const express = require('express');
const fs  = require('fs');
const router = express.Router();
const userController = require('../routesControllers/UserController');


router.post('/newuser', function(req, res, next) {
  userController.createNewUser(req.body).then(value=>{
    return res.status(200).send({message: "Користувача успішно створено"});
  },err => {
      return res.status(501).send({message: err.message}
      )})

});

router.post('/login', function (req, res, next) {
    userController.login(req.body.email,req.body.hashPassword).then(user => {
      if(!user){ return  res.status(404).send() }
        req.session.user = user;
        return  res.status(200).send({message: 'we logged'});
    }, err => {return  res.status(500).send(err)})
});

router.get('/cp',function (req, res, next) {
    if(!req.session.user){
        return res.status(401).send();
    }
    userController.getUserById(req.session.user._id).then(user => {
        return res.status(200).send(user);
    })

});

router.post('/logout',function (req, res, next) {
    if(!req.session.user){
        return res.status(401).send();
    }
    req.session.user = undefined;
    return res.status(200).send({message:"Disconnected"});
});


router.put('/changeuserdata/name', function (req,res, next) {
    userController.changeUserData(req.session.user._id, {name: req.body.name}).then(()=>{
        res.status(200).send({message: "User successfully changed"});
    }, err => {
        res.status(500).send({message: err});
    })
});

let uploadIcons =  userController.getUploadFor('icons');
 router.put('/changeuserdata', uploadIcons, function (req,res, next) {
     try{
         if(req.body.name !== req.session.user.name){
             userController.changeUserData(req.session.user._id, {name: req.body.name});
         }
         if(req.file) {
             userController.changeUserData(req.session.user._id, {fotoUrl:`${req.file.path}`});
         }
         res.status(200).send({message: "User successfully changed"});
     }
     catch (e) {
         res.status(500).send({message: e});
     }

 });


 router.get('/userIcon/**', function (req, res, next) {
     if(req.session.user){
         userController.getUserById(req.session.user._id).then(user => {
             return res.status(200).sendFile(user.fotoUrl);
         }, err => {
             return res.status(401).send({message: 'Not logged ' + err.message});
         });
     }

 });
module.exports = router;
