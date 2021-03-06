const account = require('./account');
const register = require('../diregister')({
    name: 'ota!account',
    multiple: false,
    connections: false,
    dependencies: ['ota!dao']
}, (options, dao) => account(dao, options));

module.exports = {
    register
};

