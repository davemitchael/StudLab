const express = require('express');
const router = express.Router();
const userController = require('../routesControllers/UserController');


router.post('/newuser', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  userController.createNewUser(req.body).then(value=>{
    return res.status(200).send("Користувача успішно створено");
  },err => {next(err)})

});

router.post('/login', function (req, res, next) {
    userController.login(req.body.email,req.body.hashPassword).then(user => {
      if(!user){ return  res.status(404).send() }
        req.session.user = user;
        return  res.status(200).send('we logged');
    }, err => {return  res.status(500).send(err)})
});

router.get('/cp',function (req, res, next) {
    if(!req.session.user){
        return res.status(401).send();
    }

    return res.status(200).send(req.session.user);
});

router.post('/logout',function (req, res, next) {
    if(!req.session.user){
        return res.status(401).send();
    }
    req.session.user = undefined;
    return res.status(200).send("Disconnected");
});
module.exports = router;
