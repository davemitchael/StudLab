const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/StudHubDb",{"server":{"socketOptions":{"keepAlive":1}}});

module.exports = mongoose;
