const Course  = require('.././controllers/course');
const TypeWork  = require('.././controllers/TypeWork');
const Variant  = require('.././controllers/Variant');
const Subject = require('.././controllers/Subject');
const CompletedTasks = require('.././controllers/CompletedTasks');
const User = require('.././controllers/User');

class Includer {
    constructor(){
        this.Course = Course;
        this.TypeWork = TypeWork;
        this.Variant = Variant;
        this.Subject = Subject;
        this.CompletedTasks = CompletedTasks;
        this.User = new User();
    }
}

module.exports = new Includer();