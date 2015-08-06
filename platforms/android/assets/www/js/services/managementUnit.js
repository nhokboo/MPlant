(function(angular){
    'use strict';
    var myApp = angular.module('myApp');
    myApp.factory('managementUnit',function($http,$q){
        var factory = {};

        factory.getAllManagementUnit = function(obj){
            var deffered = $q.defer();
            $http.post(globalURLV1+'getAllManagementUnit',obj)
                .success(function(data){
                    deffered.resolve(data);
                }).error(function(){
                    deffered.reject('There was an error!');
                });
            return deffered.promise;
        };
        return factory;
    });

})(window.angular);