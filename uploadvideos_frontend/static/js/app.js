
var sPositions = localStorage.positions || "{}";
var positions = JSON.parse(sPositions);

var myApp = angular.module('UploadVideosFrontEndApp', ['ngResource']);

myApp.config(function($resourceProvider){
	$resourceProvider.defaults.stripTrailingSlashes = false; // /api/videos/id/
});


function runDaily()
{
    var changeTimeAndLocationPerDay = function()
    {
        $.each(positions, function (id, data) {

            //Variables Related to detecting or locating the video
            var dataId = data.targetid;
            var extractedStart = dataId.substring(0,2);
            var extractSmth = dataId.substring(2);
            var parsedExtracted = parseInt(extractSmth);
            var nextIntExtracted = parsedExtracted + 1;
            var nextStringExtracted = nextIntExtracted.toString();
            var nextBinId = extractedStart + nextStringExtracted;
            var video = document.getElementById(data.videoid);

            //Variables related to launching the video at a specific time
            var date = new Date();
            var getDate = date.getTime();
            //Make Sure you adapt this value to your timing system, in this code, the variable is on GMT + 1
            var currenthours = (Math.floor((getDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) +1).toString();

            //Get Day and Hour from the daily schedule
            var dayExtracted = data.targetid.substr(0, 1);
            var hourExtracted = data.targetid.substr(2);

            //Locate the element in the position, before making any changes later
            document.getElementById(dataId).appendChild(document.getElementById(id));

            var parentId = document.getElementById(dataId).parentElement.id;

            var parent = document.getElementById(data.videoid).parentElement;

            var childes = parent.childNodes;

            let i;
            let count = 0;

            var launchThis = setInterval(function(){

                childes[0].addEventListener('ended', myZeroHandler,false);

                if(childes[1] != null)
                {
                    childes[1].addEventListener('ended', myOneHandler,false);
                }

                if(childes[2] != null)
                {
                    childes[2].addEventListener('ended', myTwoHandler,false);
                }

                if(childes[3] != null)
                {
                    childes[3].addEventListener('ended', myThreeHandler,false);
                }

                if(childes[4] != null)
                {
                    childes[4].addEventListener('ended', myFourHandler,false);
                }

                if(childes[5] != null)
                {
                    childes[5].addEventListener('ended', myFiveHandler,false);
                }

                if(childes[6] != null)
                {
                    childes[6].addEventListener('ended', mySixHandler,false);
                }

                function myZeroHandler(e) {

                    if(!e) {
                        e = window.event;
                    }
                    else
                    {
                        if(childes[1] !== null){
                            childes[1].play();
                        }
                    }
                }

                function myOneHandler(e) {
                    if(!e) {
                        e = window.event;
                    }
                    else
                    {
                        if(childes[2] != null){
                            childes[2].play();
                        }
                    }

                }

                function myTwoHandler(e) {
                    if(!e) {
                        e = window.event;
                    }
                    else
                    {
                        if(childes[3] != null){
                            childes[3].play();
                        }
                    }

                }

                function myThreeHandler(e) {
                    if(!e) {
                        e = window.event;
                    }
                    else
                    {
                        if(childes[4] != null){
                            childes[4].play();
                        }
                    }

                }

                function myFourHandler(e) {
                    if(!e) {
                        e = window.event;
                    }
                    else
                    {
                        if(childes[5] != null){
                            childes[5].play();
                        }
                    }

                }

                function myFiveHandler(e) {
                    if(!e) {
                        e = window.event;
                    }
                    else
                    {
                        if(childes[6] != null){
                            childes[6].play();
                        }
                    }

                }

                function mySixHandler(e) {
                    if(!e) {
                        e = window.event;
                    }
                    else
                    {
                        if(childes[7] != null){
                            childes[7].play();
                        }
                    }

                }

                //So far, the number of videos that can be read one after an other is 7, the lack of ability to use a "for" is that, the
                // parent doesn't know the next i+1 child, which causes an error.

                for(i = 0; i < childes.length; i++) {
                    count = count + childes[i].duration;
                }

                if(0 < count && count < 3595)
                {
                    $("#"+dataId).attr('colspan',1);
                    document.getElementById(data.videoid).style.height = '120px';
                    document.getElementById(data.videoid).style.width = '120px';
                    //document.getElementById(parentId).removeChild(document.getElementById(nextBinId));
                }

                if(3595 < count && count < 3595 * 2)
                {
                    $("#"+bin).attr('colspan',2);
                    document.getElementById(data.videoid).style.height = '120px';
                    document.getElementById(data.videoid).style.width = '150px';
                }

                if(3595 * 2 < count && count < 3595 * 3)
                {
                    $("#"+bin).attr('colspan',3);
                    document.getElementById(data.videoid).style.height = '120px';
                    document.getElementById(data.videoid).style.width = '150px';
                }

                if(3595 * 3 < count && count < 3595 * 4)
                {
                    $("#"+bin).attr('colspan',4);
                    document.getElementById(data.videoid).style.height = '120px';
                    document.getElementById(data.videoid).style.width = '150px';
                }

                if(3595 * 4 < count && count < 3595 * 5)
                {
                    $("#"+bin).attr('colspan',5);
                    document.getElementById(data.videoid).style.height = '120px';
                    document.getElementById(data.videoid).style.width = '150px';
                }

                if(3595 * 5 < count && count < 3595 * 6)
                {
                    $("#"+bin).attr('colspan',6);
                    document.getElementById(data.videoid).style.height = '120px';
                    document.getElementById(data.videoid).style.width = '150px';
                }

                if(3595 * 6 < count && count < 3595 * 7)
                {
                    $("#"+bin).attr('colspan',7);
                    document.getElementById(data.videoid).style.height = '120px';
                    document.getElementById(data.videoid).style.width = '150px';
                }

                //Also, the limit of the hours displayed that may be devised through counted cells is 7

                //Launches a video a specific time located in a cell
                if (date.getDay().toString() === dayExtracted && currenthours ===  hourExtracted)
                {
                    video.play();

                }

                //Resets the counter
                count = 0;

            }, 500);

        });
    };
    changeTimeAndLocationPerDay();
}

window.onload = runDaily;

myApp.controller('MainController', function($scope, Videos){

	$scope.videos = Videos.query(); //Get a list of Videos, .query() is a predefined method from ngResource

	$scope.newVideo = {};

	//Allows you to delete a video, but still clears the storage, because it causes an error to keep the position of a deleted video
	$scope.deleteVideo = function(item)
    {

        if (confirm('Are you sure you want to delete this video? this may lead to erase the positions of your scheduled videos')) {
            Videos.delete({id: item});
            localStorage.clear();
            window.location.replace('dailyschedule.html');
        }
        else {
            window.location.replace('dailyschedule.html');
        }
    };

	$scope.uploadVideo = function() {

		Videos.save($scope.newVideo).$promise.then(
            function(response) {
                // the response is a valid video, put it at the front of the video array

                $scope.videos.unshift(response);

                // reset newVideo
                $scope.newVideo = {};

                alert("Successful Upload");

            },
            function(rejection) {
                console.log('Failed to upload the video', rejection);
            }
        );

	};

	$scope.handleDrop = function(item, bin) {
	    var VideoId = item;
	    var VideoURL = document.getElementById(VideoId).currentSrc;
        var VideoDuration = document.getElementById(VideoId).duration;

        var extractedStart = bin.substring(0,2);
        var extractSmth = bin.substring(2);
        var parsedExtracted = parseInt(extractSmth);
        var nextIntExtracted = parsedExtracted + 1;
        var nextStringExtracted = nextIntExtracted.toString();
        var nextBinId = extractedStart + nextStringExtracted;
        var video = document.getElementById(VideoId);

        //Variables related to launching the video at a specific time
        var date = new Date();
        var getDate = date.getTime();
        //Make Sure you adapt this value to your timing system, in this code, the variable is on GMT + 1
        var currenthours = (Math.floor((getDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) +1).toString();

        //Get Day and Hour for the daily schedule
        var dayExtracted = bin.substr(0, 1);
        var hourExtracted = bin.substr(2);

        var parentId = document.getElementById(bin).parentElement.id;

        var parent = document.getElementById(bin);

        var childes = parent.childNodes;


        let i;
        let count = 0;

        for(i = 0; i < childes.length; i++)
        {
            const concatDuration = childes[i].duration;
            count = count + concatDuration;
        }

        if(0 < count && count < 3595)
        {
            $("#"+bin).attr('colspan',1);
            document.getElementById(VideoId).style.height = '120px';
            document.getElementById(VideoId).style.width = '120px';
            //document.getElementById(parentId).removeChild(document.getElementById(nextBinId));
        }
        if(3595 < count && count < 3595 * 2)
        {
            $("#"+bin).attr('colspan',2);
            document.getElementById(VideoId).style.height = '120px';
            document.getElementById(VideoId).style.width = '150px';
            //document.getElementById(parentId).removeChild(document.getElementById(nextBinId));
        }

        if(3595 * 2 < count && count < 3595 * 3)
        {
            $("#"+bin).attr('colspan',2);
            document.getElementById(VideoId).style.height = '120px';
            document.getElementById(VideoId).style.width = '150px';
            //document.getElementById(parentId).removeChild(document.getElementById(nextBinId));
        }

        if(3595 * 3 < count && count < 3595 * 4)
        {
            $("#"+bin).attr('colspan', 4);
            document.getElementById(VideoId).style.height = '120px';
            document.getElementById(VideoId).style.width = '150px';
            //document.getElementById(parentId).removeChild(document.getElementById(followingBinId));
        }

        if(3595 * 4 < count && count < 3595 * 5)
        {
            $("#"+bin).attr('colspan',5);
            document.getElementById(VideoId).style.height = '120px';
            document.getElementById(VideoId).style.width = '150px';
            //document.getElementById(parentId).removeChild(document.getElementById(followingBinId));
        }

        if(3595 * 5 < count && count < 3595 * 6)
        {
            $("#"+bin).attr('colspan',6);
            document.getElementById(VideoId).style.height = '120px';
            document.getElementById(VideoId).style.width = '150px';
            //document.getElementById(parentId).removeChild(document.getElementById(followingBinId));
        }

        if(3595 * 6 < count && count < 3595 * 7)
        {
            $("#"+bin).attr('colspan',7);
            document.getElementById(VideoId).style.height = '120px';
            document.getElementById(VideoId).style.width = '150px';
            //document.getElementById(parentId).removeChild(document.getElementById(followingBinId));
        }


        window.setInterval(function(){
            if (date.getDay().toString() === dayExtracted && currenthours ===  hourExtracted)
            {
                video.play();
            }
        }, 500);



        var StringifyData = '{"targetid":"'+bin+'","videoid":"'+VideoId+'","url":"'+VideoURL+'","videoduration":"'+VideoDuration+'"}';
        positions[item] = JSON.parse(StringifyData);
        localStorage.positions = JSON.stringify(positions);

        var smth = Videos.get({id: VideoId});

        //Should update the position in the database, it seems to work in the backend, but it isn't in the front end
        smth.$promise.then(

            function(response) {
                var parsedVideoDuration = VideoDuration.toString();

                smth = response;

                smth.positionsdb = bin;

                smth.videoduration = parsedVideoDuration;

                Videos.update(smth);


            },
            function(rejection) {
                console.log('Failed to update the video', rejection);
            }
        );

    };


	$scope.redirectToDailySchedule = function(){
	    window.location.replace('dailyschedule.html');
    };

	$scope.redirectToWeeklySchedule = function(){
	    window.location.replace('weeklyupload.html');
    };

	$scope.redirectToMonthlySchedule = function(){
	    window.location.replace('monthlyupload.html');
    };

	$scope.redirectToHome= function(){
	    window.location.replace('home.html');
    };

});

myApp.directive('filesModel', filesModelDirective);
myApp.directive('draggable', ngDraggable);
myApp.directive('droppable', ngDroppable);

