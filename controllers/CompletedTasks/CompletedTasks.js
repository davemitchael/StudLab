const completedTasks  = require('../../models/CompletedTasks').CompletedTasks;
const BaseController = require('../baseController');

class CompletedTasks extends BaseController {
    constructor() {
        super();
        this.schema = completedTasks;
    }

}


module.exports = CompletedTasks;