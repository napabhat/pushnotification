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
        body: "Test Send Notification"
    }
});

// function retrieveVertById(id, successCallback) {
//
//     dbCon.tokens.find({
//         token: id
//     }, function (err, clusters) {
//         if (err || !clusters) {
//             console.log("No cluster found");
//         } else {
//             regTokens = [];
//             clusters.forEach(function (cluster) {
//                 vert = cluster["vertices"];
//                 regTokens.push(vert);
//             });
//             successCallback(regTokens);
//         }
//     });
// };
//
// retrieveVertById("d_B8-wedUMI:APA91bHIuMgGuVbcWqngctaduQLq7TkHRDXV-v8zb79DwvNmM_OiZtp3OyJvp7AN66JDcn0P8OIuz14wOAGimG_S0Hvy9gwYS66gGJelULD-yIZknPI2cACu_Om0kxW9xpbsULXzukFu", function(result) {
//     console.log(result);
// });

//Add your mobile device registration tokens here
var regTokens = ['d_B8-wedUMI:APA91bHIuMgGuVbcWqngctaduQLq7TkHRDXV-v8zb79DwvNmM_OiZtp3OyJvp7AN66JDcn0P8OIuz14wOAGimG_S0Hvy9gwYS66gGJelULD-yIZknPI2cACu_Om0kxW9xpbsULXzukFu',
                'eIGilhdXaCU:APA91bGYAopM45dV7L4pzXtaNqk61FVGSxnvNq3shCEk04JUWqfa363R15jvVw9s3PDoq7wSPGNsW-8iIslyE757Oqrz18rG7KKraPGF5M3rmLOBCHp2pTKQ8Xc-D633L7c3agwzxapd'];



//Replace your developer API key with GCM enabled here
var sender = new fcm.Sender('AIzaSyAb1YKvsZ89k-w85Mk0F6g8lNq49Daqq-A');

sender.send(message, regTokens, function (err, response) {
    if(err) {
        console.error(err);
    } else {
        console.log(response);
    }
});