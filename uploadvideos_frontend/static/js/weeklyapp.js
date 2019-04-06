var sPositions2 = localStorage.positions2 || "{}";
var positions2 = JSON.parse(sPositions2);

function runWeekly()
{
    var changeTimeAndLocationPerWeek = function()
    {
        $.each(positions2, function (id, datatwo) {
            var launchThis2 = setInterval(function() {
                var date = new Date();
                var getDate = date.getTime();
                var video = document.getElementById(datatwo.videoid);

                //Get Current week Number
                var yearStart = new Date(Date.UTC(date.getUTCFullYear(),0,1));
                var weekNo = Math.ceil(( ( (date - yearStart) / 86400000) + 1)/7).toString();

                //Get Day and Week for the weekly schedule
                var weekExtracted = datatwo.targetid.substr(0, 2);
                var dayExtractedColumn = datatwo.targetid.substr(3, 4);

                if(date.getDay().toString() === dayExtractedColumn && weekNo === weekExtracted)
                {
                    video.play()
                }
                }, 2000);
                document.getElementById(datatwo.targetid).appendChild(document.getElementById(id));
        });
    };

    changeTimeAndLocationPerWeek();

}

window.onload = runWeekly;

function allowDropWeekly(ev) {
    ev.preventDefault();
    ev.stopPropagation();
}

function dragWeekly(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dropWeekly(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    var VideoId = data - 8000;
    //var VideoId = data;
    var VideoURL = document.getElementById(VideoId).currentSrc;
    var StringifyData = '{"targetid":"'+ev.target.id+'","videoid":"'+VideoId+'","url":"'+VideoURL+'"}';
    var ParsedData = JSON.parse(StringifyData);
    positions2[data] = ParsedData;
    localStorage.positions2 = JSON.stringify(positions2);
}