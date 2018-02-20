const controllers = require("../Includer");
const User = require('../../controllers/User');

class UserController {
    constructor(){}

  static createNewUser(newUser){
        return new Promise((resolve, reject) => {
           const _user = new User(newUser);
           _user._save().then(value => {
               resolve(value);
           }, err => {reject(err)});
        })
    }

   static login(email,passwordHash) {
        return new Promise((resolve, reject) => {
            controllers.User._findOne({email:email, hashPassword:passwordHash}).then(user => {
                resolve(user);
            }, err => {reject(err)})
        })
    }
}

module.exports = UserController;