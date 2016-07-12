var FCM = require('fcm-push');

var serverKey = 'AIzaSyAb1YKvsZ89k-w85Mk0F6g8lNq49Daqq-A'; //Android
//var serverKey = 'AIzaSyDtpcAXaySuVQd1H99sPvWumJc82neSzlY'; //Iphone
var fcm = new FCM(serverKey);

var message = {
    to: 'd_B8-wedUMI:APA91bHIuMgGuVbcWqngctaduQLq7TkHRDXV-v8zb79DwvNmM_OiZtp3OyJvp7AN66JDcn0P8OIuz14wOAGimG_S0Hvy9gwYS66gGJelULD-yIZknPI2cACu_Om0kxW9xpbsULXzukFu', // required
    collapse_key: 'your_collapse_key',
    data: {
        your_custom_data_key: 'your_custom_data_value'
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