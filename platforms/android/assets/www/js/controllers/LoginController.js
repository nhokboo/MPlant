/**
 * Created by hoxuancuong on 11/7/14.
 */

(function(angular){
    'use strict';
    var myApp = angular.module('myApp');

    myApp.controller('LoginController',function(ngDialog,$scope,$location,$timeout){
        if($scope.$parent.loginSuccess==true){
            $location.path('/pighome');
        }
    });

})(window.angular);