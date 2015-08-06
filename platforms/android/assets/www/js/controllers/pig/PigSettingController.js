/**
 * Created by hoxuancuong on 11/7/14.
 */
(function(angular){
    'use strict';
    var myApp = angular.module('myApp');
    myApp.controller('PigSettingController',function($scope,$http,$routeParams,$location,managementUnit){



        $scope.$parent.activeClass = [
            {class:""},
            {class:"active"},
            {class:""},
            {class:""}
        ];

        $scope.$parent.history='pigsetting';


        $scope.$parent.configure.titleName =  $scope.$parent.customer_name;
        $scope.$parent.configure.classIcon = '';
        $scope.$parent.configure.hrefIcon = '#/addLocation';
        $scope.$parent.leftIcon.status=false;


    });

})(window.angular);