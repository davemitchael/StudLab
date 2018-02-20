const user = require('../../models/User').User;
const BaseController = require('../baseController');

class User extends BaseController {
    constructor(_user){
        super();
        this.schema = (_user)? new user(_user) : user;
    }

}

module.exports = User;