var mongojs = require('mongojs');

var databaseUrl = 'kengbascher_mongojs';
var collections = ['users', 'clubs'];

var connect = mongojs(databaseUrl, collections);

module.exports = {
    connect: connect
};