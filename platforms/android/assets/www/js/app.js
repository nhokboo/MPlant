
FastClick.attach(document.body);

var globalURLV1 = 'http://dev.mimosatek.com:5002/api/';
//


var module = angular.module('myApp', ['panzoom','uiSwitch','ngTouch','infinite-scroll','ngDialog','ngCookies','timepickerPop','ngRoute','highcharts-ng','ui-rangeSlider','ngSanitize']);


module.config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider) {
    $routeProvider
        .when('/',
        {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        })
        .when('/home',
        {
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
        })

        .when('/monitoryDetail',{
            templateUrl:'partials/monitoryDetail.html',
                controller:'MonitoryController'
        })

        .when('/pighome',{
            templateUrl:'partials/pig/home.html',
            controller:'PigHomeController'
        })
        .when('/pigsetting',{
            templateUrl:'partials/pig/setting.html',
            controller:'PigSettingController'
        })
        .when('/pigreport',{
            templateUrl:'partials/pig/report.html',
            controller:'PigReportController'
        })
        .when('/pigabout',{
            templateUrl:'partials/pig/about.html',
            controller:'PigAboutController'
        })

        .when('/managementsetting',{
            templateUrl:'partials/managementsetting.html',
            controller:'ManagementSettingController'
        })

    ;
    $routeProvider.otherwise({redirectTo: '/'});

}]);

