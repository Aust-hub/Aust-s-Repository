$(document).ready(function() {
    function displayTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var clockDiv = document.getElementById('clock');
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
    }
    setInterval(displayTime, 1000);
    displayTime();
});