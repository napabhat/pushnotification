var fcm = require('../lib/node-fcm');
var mongojs = require('./db');
var dbCon = mongojs.connection;
var regTokens = [];

//var message = new fcm.Message();
// message.addData('hello', 'world');
// message.addNotification('title', 'Hello');
// message.addNotification('icon', 'ic_launcher');
// message.addNotification('body', 'World');

var message = new fcm.Message({
    collapseKey: 'demo',
    priority: 'high',
    //contentAvailable: true,
    //delayWhileIdle: true,
    //timeToLive: 3,
    //restrictedPackageName: "somePackageName",
    //dryRun: true,
    data: {
        picture_url : 'http://opsbug.com/static/google-io.jpg'
    },
    notification: {
        title: "NodeJs",
        icon: "ic_launcher",
        body: "Node send notification"
    }
});


    dbCon.tokens.find(function (err, tokens) {
        if (err) return next(err);
        tokens.forEach(function (tokensObject) {
            regTokens.push(tokensObject.token);
        })
        console.log('token :' + tokens);
    });


//Add your mobile device registration tokens here

// var regTokens = ['d_B8-wedUMI:APA91bHIuMgGuVbcWqngctaduQLq7TkHRDXV-v8zb79DwvNmM_OiZtp3OyJvp7AN66JDcn0P8OIuz14wOAGimG_S0Hvy9gwYS66gGJelULD-yIZknPI2cACu_Om0kxW9xpbsULXzukFu',
//                 'eIGilhdXaCU:APA91bGYAopM45dV7L4pzXtaNqk61FVGSxnvNq3shCEk04JUWqfa363R15jvVw9s3PDoq7wSPGNsW-8iIslyE757Oqrz18rG7KKraPGF5M3rmLOBCHp2pTKQ8Xc-D633L7c3agwzxapd',
//                 'eIGilhdXaCU:APA91bGYAopM45dV7L4pzXtaNqk61FVGSxnvNq3shCEk04JUWqfa363R15jvVw9s3PDoq7wSPGNsW-8iIslyE757Oqrz18rG7KKraPGF5M3rmLOBCHp2pTKQ8Xc-D633L7c3agwzxapd'];

//Replace your developer API key with GCM enabled here
var sender = new fcm.Sender('AIzaSyAb1YKvsZ89k-w85Mk0F6g8lNq49Daqq-A');

sender.send(message, regTokens, function (err, response) {
    if(err) {
        console.error(err);
    } else {
        console.log(response);
    }
});