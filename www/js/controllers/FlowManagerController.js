(function(angular){
    'use strict';
    var myApp = angular.module('myApp');
    myApp.controller('FlowManagerController',function($location,ngDialog,$scope){

        $scope.hideScroll='';
        $scope.loginSuccess = true;
        $scope.first_class= 'my-body';
        var storage = window.localStorage;

        $scope.turnOnMenu = function(){
            $scope.animateSwift = 'animated slideInLeft';
            $scope.swift_menu= !$scope.swift_menu;
        };

        $scope.turnOffMenu = function(){
            $scope.animateSwift = 'animated fadOutLeft';
            $scope.swift_menu= false;
        };

        $scope.animateSwift = 'animated slideInLeft';
        $scope.swift_menu=false;
        $scope.history='exit';


        $scope.currentSensor = {
            topic:'',
            value:'',
            timestamp:'',
            name:'',
            sensor_id:'',
            unit:''
        };



        $scope.system_id = 0;
        $scope.parent_id = 0;

        $scope.currentNode = '';
        $scope.currentNameNode = '';

        $scope.currentTab0 = 'my-tab2';
        $scope.currentTab1 = '';
        $scope.currentTab2 = '';

        $scope.statusMonitory= false;
        $scope.countNotification = 0;
        var dialog;
        $scope.system_id = 1;
        $scope.gateway_id = 1;
        $scope.customer_name='AAA';
        $scope.user_id = 1;
        $scope.allNotification = [];

        $scope.normalData = {};

        $scope.activeClass=[];
        $scope.activeClass = [
            {class:"active"},
            {class:""},
            {class:""},
            {class:""}
        ];


        $scope.unitAndRole = [];
        $scope.allPermissionFlag = false;

        $scope.flagEditPopularInformation = false;
        $scope.customer_name = 'MIMOSATEK';
        $scope.user_id = '';

        $scope.object = {
            user_id:'',
            action_type:'',
            object_id:'',
            next_step:'',
            result:'',
            extend:''
        };

        $scope.configure = {
            titleName:'MIMOSATEK'
        };

        $scope.leftIcon={
            hrefIcon:'',
            classIcon:'fa fa-chevron-left',
            status:false
        };




    });

})(window.angular);