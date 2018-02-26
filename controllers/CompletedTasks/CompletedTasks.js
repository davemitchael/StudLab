const completedTasks  = require('../../models/CompletedTasks').CompletedTasks;
const BaseController = require('../baseController');

class CompletedTasks extends BaseController {
    constructor(_task) {
        super();
        this.schema = (_task)? new completedTasks(_task) : completedTasks;
    }

}


module.exports = CompletedTasks;