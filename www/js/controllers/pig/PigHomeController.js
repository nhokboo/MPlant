

(function(angular){
    'use strict';
    var myApp = angular.module('myApp');


    myApp.controller('PigHomeController',function(managementUnit,TimelineMore,$scope,ngDialog,$http,$routeParams){


        $scope.$parent.history='home';
        $scope.$parent.first_class='';
        $scope.$parent.configure.titleName =  $scope.$parent.customer_name;
        $scope.$parent.configure.hrefIcon = '#/addLocation';
        $scope.$parent.configure.classIcon = '';
        $scope.$parent.leftIcon.status=false;

        var serverURL = globalURLV1;

        // Take a photo from camera
        $scope.takePhoto = function(){
            // var option = {
            //     // targetWidth: 250,
            //     // targetHeight: 250,
            //     destinationType: destinationType.DATA_URL,
            //     popoverOptions: CameraPopoverOptions,
            //     correctOrientation: true,
            //     saveToPhotoAlbum: false
            // };
            // navigator.camera.getPicture(onCameraSuccess, onError,option);
              navigator.camera.getPicture(onCameraSuccess, onError,
                {
                    quality: 30,
                    // targetWidth: 300,
                    // targetHeight: 300,
                    destinationType: Camera.DestinationType.FILE_URI,
                    encodingType: Camera.EncodingType.PNG,
                    correctOrientation: true,
                    sourceType: Camera.PictureSourceType.CAMERA
                });
        }
        // When action take photo success
        function onCameraSuccess(imgURL){
                upload(imgURL);
        }
        // When get or take photo failed
        function onError(e){
                alert("Wrong"); 
        }

        // Upload photo to server
        function upload(imgURL) {

            var ft = new FileTransfer();

            var options = new FileUploadOptions();
            var serverURL = "http://dev.mimosatek.com:5002/";
            options.fileKey = "file";
            options.fileName = 'filename.png';
            options.mimeType = "image/png";
            options.chunkedMode = true;
            options.params = {
                "description": "Uploaded from my phone",
                "management_unit_id": 1,
                "gateway_id": 1,
                "node_id":1,
                "user_id": 1,
                "system_id":1,
                "camera_type": 1
            };

            ft.upload(imgURL,encodeURI(serverURL + "api/addImage"),
                function (e) {
                    alert("Cập nhật thành công! ", e);
                    var tempParam='url:'+serverURL + "api/addImage";

                    $scope.reddit = new TimelineMore();
                    $scope.reddit.nextPage(1,1,1);
                },
                function (e) {
                    alert("Cập nhật không thành công!");
                    var tempParam='url:'+serverURL + "api/addImage";
                }, options);
        }

        $scope.reddit = new TimelineMore();

        //$scope.reddit.nextPage(1,1,1);

        $scope.receive = function(){
            alert("begin receive");
            var node_id = 1;
            var user_id = 1; 
            var management_unit_id = 1; 
            var httpReq = new plugin.HttpRequest();
            httpReq.post("http://dev.mimosatek.com:5002/api/returnTimeline",{
                "node_id": 1,
                "user_id": 1,
                "management_unit_id": 1,
            },function(status, data) {
                alert(data);
                alert(JSON.parse(data));
                alert(status);
            });
        }

         $scope.zoomImage=function(item){

            FullScreenImage.showImageURL(item.image1600x1200);
            /*
            $scope.Imagesrc = item.image1600x1200;
            var dialog =  ngDialog.open
            ({
                template: 'templateZoomImage',
                // controller: ['$scope', function($scope) {


                // }],
                showClose:true,
                closeByDocument: false,
                replace: true,
                scope: $scope
            });
            */
        };
    });



})(window.angular);
