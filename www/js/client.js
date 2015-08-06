
		document.addEventListener("deviceready",onDeviceReady,false);

		// device APIs are available
		//
		var temp;
		function onDeviceReady() {
			pictureSource=navigator.camera.PictureSourceType;
			destinationType=navigator.camera.DestinationType;

		}

        
		function takePhoto(){
			var option = {
				quality: 100,
				// targetWidth: 250,
				// targetHeight: 250,
				destinationType: destinationType.DATA_URL,
				popoverOptions: CameraPopoverOptions,
				correctOrientation: true,
				saveToPhotoAlbum: false
			};
           navigator.camera.getPicture(onCameraSuccess, onError,option);
        }

        function getPhoto(source){
			var option = {
				quality: 100,
				// targetWidth: 250,
				// targetHeight: 250,
				destinationType: destinationType.FILE_URI,
				sourceType: source,
				popoverOptions: CameraPopoverOptions,
				saveToPhotoAlbum: false,
				correctOrientation: true 
			};
            navigator.camera.getPicture(onPhotoSuccess, onError, option);
        }

        function onPhotoSuccess(imgURL){
            //
            var smallImage = document.getElementById('smallImage');

            smallImage.style.display = 'block';

            smallImage.src = imgURL;

            temp = imgURL;

        }

        function onCameraSuccess(imgURL){
			  var smallImage = document.getElementById('smallImage');

			  smallImage.style.display = 'block';

			  smallImage.src = "data:image/jpeg;base64," + imgURL;

		}

        function onError(e){
            alert("Wrong");
        }

        function upload(){

			var ft = new FileTransfer();

			var option  = new FileUploadOptions();

			var serverURL = "http://dev.mimosatek.com:5002/";


			var fileURL= document.getElementById('smallImage').src;

			var userid = "namnguyen";
			var nodeid = "node1";

			option.filekey= "file";
			option.fileName= "temp.png";
			option.mimeType = "image/png";
		    

		    option.params = {userid:"namenguyen", nodeid:"node1"};
		   	//To upload files
			ft.upload(fileURL, encodeURI(serverURL + "api/addImage"),onSuccess, onFailed,option);
		}


		function onSuccess(e){
			alert("File Uploaded");
		}


		function onFailed(e){
			alert("Failed");
		}

		function receive(){
			var httpReq = new plugin.HttpRequest();
			httpReq.post("http://dev.mimosatek.com:5002/api/returnImage",{
				userid: "namnguyen",
				nodeid: "node1"
			},function(status, data) {
				var object = JSON.stringify(data);
				alert(object);
			});
			}

/*				for (i=1;i<len; i++){
					out + json[i].user + "<br>";
					alert(json[i].user);
				}
				document.getElementById("testjson").innerHTML = out;*/
			/*
			var API = "http://dev.mimosatek.com:5002/api/returnImage";

		 	var http_request = new XMLHttpRequest();
		    alert(http_request);
		    http_request.open("POST", API, false);
		    http_request.send(null);
		    var my_JSON_object = http_request.responseText;
		    alert(my_JSON_object);
		    var data = JSON.parse(my_JSON_object);
		    alert(data);
		    var Itemlist = [];
		    for (var i = 0; i < Status.length; i++) {
		        Itemlist[i] = data.Status.Itemlist[0].user;
		        alert(user);
    		}*/