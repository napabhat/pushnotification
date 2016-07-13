var FCM = require('fcm-push');

var serverKey = 'AIzaSyAb1YKvsZ89k-w85Mk0F6g8lNq49Daqq-A';
var fcm = new FCM(serverKey);

var args = ['d_B8-wedUMI:APA91bHIuMgGuVbcWqngctaduQLq7TkHRDXV-v8zb79DwvNmM_OiZtp3OyJvp7AN66JDcn0P8OIuz14wOAGimG_S0Hvy9gwYS66gGJelULD-yIZknPI2cACu_Om0kxW9xpbsULXzukFu',
            'eIGilhdXaCU:APA91bGYAopM45dV7L4pzXtaNqk61FVGSxnvNq3shCEk04JUWqfa363R15jvVw9s3PDoq7wSPGNsW-8iIslyE757Oqrz18rG7KKraPGF5M3rmLOBCHp2pTKQ8Xc-D633L7c3agwzxapd'];


var message = {
    //to: 'cU_dg3MHpP8:APA91bEYRpb-DXwhomKokNqAmLCk8yxR74jA953ZgwdwdoNRFxzu_CTRnPyRkMr7mPluQs1eIcLCZeFBAWMHtxkqQlJPaIBPXQZayXPb4hpVobkH-OScmYjhkIqgkudlfwlu0o7sSM7O', // required
    registration_ids: args,
    collapse_key: 'your_collapse_key',
    priority: 'high',
    data: {
        //your_custom_data_key: 'your_custom_data_value'
        picture_url : 'http://opsbug.com/static/google-io.jpg'
    },
    notification: {
        title: 'Title of your push notification',
        body: 'Body of your push notification'
    }
};

fcm.send(message, function(err, response){
    if (err) {
        console.log("Something has gone wrong!");
    } else {
        console.log("Successfully sent with response: ", response);
    }
});