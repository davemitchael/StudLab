const course  = require('../../models/Course').Course;
const BaseController = require('../baseController');

class Course extends BaseController {
    constructor() {
        super();
        this.schema = course;
    }

}


module.exports = Course;