/* โหลด Express มาใช้งาน */
var users = require('./models/users');
var tokens = require('./models/tokens')
var app = require('express')();
var bodyParser = require('body-parser');
var mongojs = require('./utils/db');
var db = mongojs.connect;
var dbCon = mongojs.connection;

/* ใช้ port 7777 หรือจะส่งเข้ามาตอนรัน app ก็ได้ */
var port = process.env.PORT || 7777;

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//module.exports = require('./utils/notification');
module.exports = require('./utils/fcmnotification');

/* Routing */
app.get('/', function (req, res) {
    // db.users.count(function(err, result) {
    //     if (result <= 0) {
    //         db.users.insert(users.findAll(), function(err, docs) {
    //             // insert new data.
    //         });
    //     }
    //     res.send('<h1>Hello Node.js</h1>');
    // });
    dbCon.tokens.count(function (err, result) {
        if (result <= 0){
            dbCon.tokens.insert(tokens.findAll(), function (err, docs) {
                // insert new data.
            })
        }
        res.send('<h1>Hello Token.js</h1>')
    });
});
app.get('/index', function (req, res) {
    res.send('<h1>This is index page</h1>');
});

app.get('/user', function (req, res) {
    db.users.find(function(err, docs) {
        res.json(docs);
    });

});

app.get('/user/:id', function (req, res) {
    var id = parseInt(req.params.id);

    db.users.findOne({id: id}, function(err, docs) {
        res.json(docs);
    });
});

app.post('/newuser', function (req, res) {
    var json = req.body;

    db.users.insert(json, function(err, docs) {
        res.send('Add new ' + docs.name + ' Completed!');
    });
});

/* แสดงข้อมูล Tokens */

app.get('/token', function (req, res) {
    dbCon.tokens.find(function (err, docs) {
        res.json(docs)
    });

});

app.post('/registerToken', function (req, res) {
    var json = req.body;
    dbCon.tokens.insert(json, function (err, docs) {
        res.send('Add new' + docs.token + ' Completed')
    })
});

app.get('/token/:id', function (req, res) {
    var id = parseInt(req.params.id);

    dbCon.tokens.findOne({id: id}, function(err, docs) {
        res.json(docs);
    });

});

/* สั่งให้ server ทำการรัน Web Server ด้วย port ที่เรากำหนด */
app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});

module.exports = app;

