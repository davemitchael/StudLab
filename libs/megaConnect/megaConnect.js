const mega = require('mega');
const authData = require('./megaLogin').auth;

const storage = mega({
    email: authData.email,
    password: authData.password
}, value => {
    console.log(value);
});

exports.storage = storage;