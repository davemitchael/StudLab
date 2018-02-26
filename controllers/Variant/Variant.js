const variant  = require('../../models/Variant').Variant;
const BaseController = require('../baseController');

class Variant extends BaseController {
    constructor() {
        super();
        this.schema = variant;
    }

}

module.exports = Variant;