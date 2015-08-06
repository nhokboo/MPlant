(function(angular){
    'use strict';
    var myApp = angular.module('myApp');
    myApp.controller('MonitoryController',function(managementUnit,$timeout,ngDialog,$cookieStore,$scope,$http,$routeParams,$location){


        $scope.$parent.first_class='';
        $scope.$parent.configure.titleName =  $scope.$parent.customer_name;
        $scope.$parent.configure.hrefIcon = '#/addLocation';
        $scope.$parent.configure.classIcon = '';
        $scope.$parent.leftIcon.status=false;

        $scope.$parent.activeClass = [
            {class:"active"},
            {class:""},
            {class:""},
            {class:""}
        ];

        $scope.$parent.currentTab0 = 'my-tab2';
        $scope.$parent.currentTab1 = '';
        $scope.$parent.currentTab2 = '';




    });

})(window.angular);