const subject  = require('../../models/Subject').Subject;
const BaseController = require('../baseController');

class Subject extends BaseController {
    constructor() {
        super();
        this.schema = subject;
    }

}


module.exports = Subject;