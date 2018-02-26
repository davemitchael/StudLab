const typeWork  = require('../../models/TypeWork').TypeWork;
const BaseController = require('../baseController');

class TypeWork extends BaseController {
    constructor() {
        super();
        this.schema = typeWork;
    }

}


module.exports = TypeWork;