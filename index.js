var timer = null
var currentDate = document.querySelector("h1");
var clockDisplay = document.querySelector("h2");

function start(){
    var now = new Date();
    var date = now.toDateString();
    var clock = now.toLocaleTimeString();

    currentDate.innerHTML = clock; 
    clockDisplay.innerHTML = date;
    timer = setTimeout("start()",1000);
}

start();