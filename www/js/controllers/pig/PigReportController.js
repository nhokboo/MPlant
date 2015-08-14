

(function(angular){
    'use strict';
    var myApp = angular.module('myApp');
    myApp.controller('PigReportController',function(ngDialog,managementUnit,$scope, PanZoomService){
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
        $scope.config= {
            zoomOnDoubleClick:false,
            zoomOnMouseWheel: true,
            panOnClickDrag:true,
            invertMouseWheel:true

        };
        $scope.model = {};

        $scope.panzoomID= 'PanZoom';

        $scope.zoomIn = function(){
            PanZoomService.getAPI($scope.panzoomID).then(function(api){
                api.zoomIn();
            })
        };

        $scope.zoomOut= function(){
            PanZoomService.getAPI($scope.panzoomID).then(function(api){
                api.zoomOut();
            })
        };

    });



})(window.angular);
