

(function(angular){
    'use strict';
    var myApp = angular.module('myApp');
    myApp.factory('TimelineMore', function($http, $q) {

        var TimelineMore = function() {
            this.items = [];
            this.busy = false;
            this.after = '';
            this.min = 0;
            this.max = 2;
            this.url = "http://dev.mimosatek.com:5002/api/returnTimeline";
        };
        TimelineMore.prototype.nextPage = function(management_unit_id, node_id, user_id) {
            if (this.busy) return;
            this.busy = true;
            $http.post(this.url,{management_unit_id:management_unit_id, node_id: node_id, user_id: user_id, number_min:this.min, number_max:this.max}).success(function(data) {
                if(data.length>0){
                    for (var i = 0; i < data.length; i++) {


/*                        var item = new Object();
                        Date date  = new Date(data[i].images_time);
                        item.date = date.getFullYear() + "-" +date.getMonth() + "-" + date.getDay();
                        item.times = date.getHours() + ":" + date.getMinutes();

                        item.image640x480 = data[i].image640x480;
                        item.image1600x1200 = data[i].image1600x1200;
                        item.camera_type = data[i].camera_type;
                        item.sensors = data[i].sensors;*/
                        moment.locale('vi');
                        var a = moment(data[i].image_time);
                        var item = data[i];
                        item["times"] = /*new Object*/(moment(data[i].image_time).fromNow());
                        this.items.push(item);
                    }
                    this.min = this.items.length;
                    this.max =  this.min  + 2;
                    this.busy = false;
                }
            }.bind(this));
        };
        return TimelineMore;
    });

})(window.angular);