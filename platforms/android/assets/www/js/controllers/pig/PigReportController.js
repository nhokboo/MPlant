

(function(angular){
    'use strict';
    var myApp = angular.module('myApp');
    myApp.controller('PigReportController',function(ngDialog,managementUnit,$scope){
        //save log_users

        $scope.$parent.activeClass = [
            {class:""},
            {class:""},
            {class:""},
            {class:"active"}
        ];
        $scope.$parent.configure.titleName =  $scope.$parent.customer_name;
        $scope.$parent.configure.classIcon = '';
        $scope.$parent.configure.hrefIcon = '#/addLocation';
        $scope.$parent.leftIcon.status=false;


    });



})(window.angular);
