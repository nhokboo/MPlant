/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');


    },

//    onBackKeyDown: function(){
//        alert("You pressed OK!");
//        navigator.notification.beep(1);
//    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

    }
};

function testBeep(){
    navigator.notification.beep(2);
}

function testImage(){
    navigator.camera.getPicture(onPhotoURISuccess, photoOnFail,
        {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY });
}

function photoOnFail(message) {
    navigator.notification.alert("onCameraError: " + message);
}

function onPhotoURISuccess(imageURI) {
    navigator.notification.alert("onCameraSuccess: " + imageURI);
}

function testCamera(){
    navigator.camera.getPicture(onCameraSuccess,
        onCameraError,{});
}

function onCameraSuccess(imageURL) {
    navigator.notification.alert("onCameraSuccess: " + imageURL);
}
function onCameraError(e) {
    navigator.notification.alert("onCameraError: " + e);
}

function testGPS(){
    var options = { frequency: 3000 };
    navigator.geolocation.watchPosition(onSuccess, onError, options);
}

function onSuccess(position) {

    navigator.notification.alert("Latitude: " + position.coords.latitude+", Longitude: "+position.coords.longitude);
}

function onError(error) {
    navigator.notification.alert("onCameraError: " + error);
}



//
//// handle APNS notifications for iOS
//function onNotificationAPN(e) {
//    if (e.alert) {
//
//        // showing an alert also requires the org.apache.cordova.dialogs plugin
//        navigator.notification.alert(e.alert);
//    }
//
//    if (e.sound) {
//        // playing a sound also requires the org.apache.cordova.media plugin
//        var snd = new Media(e.sound);
//        snd.play();
//    }
//
//    if (e.badge) {
//        pushNotification.setApplicationIconBadgeNumber(successHandler, e.badge);
//    }
//}
//
//// handle GCM notifications for Android
//function onNotification(e) {
//
//    alert('1111');
//    switch( e.event )
//    {
//        case 'registered':
//            if ( e.regid.length > 0 )
//            {
//
//                // Your GCM push server needs to know the regID before it can push to this device
//                // here is where you might want to send it the regID for later use.
//                console.log("regID = " + e.regid);
//            }
//            break;
//
//        case 'message':
//            // if this flag is set, this notification happened while we were in the foreground.
//            // you might want to play a sound to get the user's attention, throw up a dialog, etc.
//            if (e.foreground)
//            {
//
//                console.log('------');
//                console.log(JSON.stringify(e));
//                // on Android soundname is outside the payload.
//                // On Amazon FireOS all custom attributes are contained within payload
//                //var soundfile = e.soundname || e.payload.sound;
//                // if the notification contains a soundname, play it.
//                // playing a sound also requires the org.apache.cordova.media plugin
//                var my_media = new Media("/assets/www/beep.wav" );
//                console.log('------');
//                console.log(JSON.stringify(my_media));
//
//                my_media.play();
//            }
//            else
//            {	// otherwise we were launched because the user touched a notification in the notification tray.
//                if (e.coldstart)
//                {
//
//                }
//
//                else{}
//
//            }
//            break;
//
//        case 'error':
//
//            break;
//
//        default:
//            break;
//    }
//}


//// handle APNS notifications for iOS
//function onNotificationAPN(e) {
//    if (e.alert) {
//        // showing an alert also requires the org.apache.cordova.dialogs plugin
//        navigator.notification.alert(e.alert);
//    }
//
//    if (e.sound) {
//        // playing a sound also requires the org.apache.cordova.media plugin
//        var snd = new Media(e.sound);
//        snd.play();
//    }
//    if (e.badge) {
//        pushNotification.setApplicationIconBadgeNumber(successHandler, e.badge);
//    }
//}
//
//// handle GCM notifications for Android
//function onNotification(e) {
//
//    console.log('cuong' + e.event);
//    switch( e.event )
//    {
//        case 'registered':
//            if ( e.regid.length > 0 )
//            {
//                // Your GCM push server needs to know the regID before it can push to this device
//                // here is where you might want to send it the regID for later use.
//                console.log("aaaaa = " + e.regid);
//
//                console.log("regID = " + e.regid);
//                try{
//                    currentKeyString = e.regid;
//                }
//                catch(err){
//                    console.log("cuong00"+err);
//                }
//                console.log("cuong00 " + e.regid);
//            }
//            break;
//
//        case 'message':
//            // if this flag is set, this notification happened while we were in the foreground.
//            // you might want to play a sound to get the user's attention, throw up a dialog, etc.
//            if (e.foreground)
//            {
//
//                console.log('------');
//                console.log(JSON.stringify(e));
//                // on Android soundname is outside the payload.
//                // On Amazon FireOS all custom attributes are contained within payload
//                //var soundfile = e.soundname || e.payload.sound;
//                // if the notification contains a soundname, play it.
//                // playing a sound also requires the org.apache.cordova.media plugin
//                var my_media = new Media("/android-assets/www/beep.wav" );
//                console.log('------');
//                console.log(JSON.stringify(my_media));
//
//                my_media.play();
//            }
//            else
//            {	// otherwise we were launched because the user touched a notification in the notification tray.
//                if (e.coldstart)
//                {}
//                else
//                {}
//            }
//
//
//            break;
//
//        case 'error':
//
//            break;
//
//        default:
//            break;
//    }
//}
//
//function tokenHandler (result) {
//    $("#app-status-ul").append('<li>token: '+ result +'</li>');
//    // Your iOS push server needs to know the token before it can push to this device
//    // here is where you might want to send it the token for later use.
//}
//
//function successHandler (result) {
//    $("#app-status-ul").append('<li>success:'+ result +'</li>');
//}
//
//function errorHandler (error) {
//    $("#app-status-ul").append('<li>error:'+ error +'</li>');
//}


app.initialize();