var mongojs = require('mongojs');

var databaseUrl = 'kengbascher_mongojs';
var collections = ['users', 'clubs'];
var collectionsToken = ['tokens', 'clubs'];

var connect = mongojs(databaseUrl, collections);
var connection = mongojs(databaseUrl, collectionsToken);

module.exports = {
    connect: connect
};

module.exports = {
    connection: connection
};