var sPositions3 = localStorage.positions3 || "{}";
var positions3 = JSON.parse(sPositions3);

function runMonthly()
{
    var changeTimeAndLocationPerMonth = function()
    {
        $.each(positions3, function (id, datathree) {
        var launchThis3 = setInterval(function() {
            var date = new Date();
            var video = document.getElementById(datathree.videoid);

            var currentMonth = date.getMonth() + 1;
            var currentYear = date.getFullYear();

            var day = date.getDay();
            var diff = date.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday

            var firstDayOfWeek = diff || 0;
            var firstOfMonth = new Date(currentYear, currentMonth-1, 1);
            var lastOfMonth = new Date(currentYear, currentMonth, 0);
            var numberOfDaysInMonth = lastOfMonth.getDate();
            var firstWeekDay = (firstOfMonth.getDay() - firstDayOfWeek + 7) % 7;

            var used = firstWeekDay + numberOfDaysInMonth;

            var weekNo = Math.ceil( used / 7);

            //Get Day and Hour from the monthly schedule
            var  monthExtracted = datathree.targetid.substr(0, 1);
            var weekExtracted = datathree.targetid.substr(2, 3);


            if (currentMonth.toString() === monthExtracted && weekNo.toString() ===  weekExtracted)
            {
                video.play();
            }
            }, 2000);
            document.getElementById(datathree.targetid).appendChild(document.getElementById(id));
        });
    };
    changeTimeAndLocationPerMonth();
}

window.onload = runMonthly;

function allowDropMonthly(ev) {
    ev.preventDefault();
    ev.stopPropagation();
}

function dragMonthly(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dropMonthly(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    var VideoId = data - 8000;
    //var VideoId = data;
    var VideoURL = document.getElementById(VideoId).currentSrc;
    var StringifyData = '{"targetid":"'+ev.target.id+'","videoid":"'+VideoId+'","url":"'+VideoURL+'"}';
    var ParsedData = JSON.parse(StringifyData);
    positions3[data] = ParsedData;
    localStorage.positions3 = JSON.stringify(positions3);
}