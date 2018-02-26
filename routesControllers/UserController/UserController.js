const controllers = require("../Includer");
const User = require('../../controllers/User');
const basicController = require("../basicRoutesController/BasicRoutesController");
const fs = require('fs');

class UserController extends basicController{

    constructor() {
        super();
    }

    static createUserDirectories(directory) {

        return fs.mkdir(directory, (err) => {
            if (err) {
                reject(err);
            }
            fs.mkdir(`${directory}/icons`, (err) => {
                if (err) {
                    reject(err);
                }
            });

            fs.mkdir(`${directory}/tasks`, (err) => {
                if (err) {
                    reject(err);
                }
            });
        });
    };

    static createNewUser(newUser) {
        return new Promise((resolve, reject) => {
            const _user = new User(newUser);
            try {
                fs.statSync(`C:/Users/vitaliy.ivantsiv/Documents/GitHub/StudLab/physicalDataBase/${_user.schema.email}/`);
                return reject(new Error('That email is already in use'));
            }
            catch (e) {
                return _user._save().then(value => {
                    UserController.createUserDirectories(`C:/Users/vitaliy.ivantsiv/Documents/GitHub/StudLab/physicalDataBase/${_user.schema.email}`);
                    return resolve(value)
                }, err => {
                    return reject(err)
                });
            }
        })
    };

    static login(email, passwordHash) {
        return new Promise((resolve, reject) => {
            controllers.User._findOne({email: email, hashPassword: passwordHash}).then(user => {
                resolve(user);
            }, err => {
                reject(err)
            })
        })
    };



    static changeUserData(id, data) {
        return new Promise((resolve, reject) => {
            controllers.User._findOne({_id: id}).then(user => {
                user.set(data);
                user.save((err, _user) => {
                    if (err) return reject(err);
                    return resolve(_user)
                })
            });
        })
    };

    static getUserById(id) {
        return new Promise((resolve, reject) => {
            controllers.User._findOne({_id: id}).then(user => {
                return resolve(user)
            }, err => {  return reject(err);})
        });
    }

}
module.exports = UserController;