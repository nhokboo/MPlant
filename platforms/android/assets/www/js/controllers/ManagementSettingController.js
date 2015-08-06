(function(angular){
    'use strict';
    var myApp = angular.module('myApp');

    myApp.config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyCrCdkoTiUTyMp3eYbC_3i_IcqoAnIgKf4',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    });
    myApp.controller('ManagementSettingController',function(managementUnit,$location,geolocation,uiGmapGoogleMapApi,ngDialog,$scope){



    });

})(window.angular);