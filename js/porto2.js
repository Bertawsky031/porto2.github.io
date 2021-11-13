//sidemenu
var menubtn = document.getElementById("menubtn");
var sidenav = document.getElementById("sidenav");
var menu = document.getElementById("menu");

sidenav.style.right = "-250px";

menubtn.onclick = function() {
    if (sidenav.style.right == "-250px") {
        sidenav.style.right = "0";
        menu.src = "img/close.png";
    } else {
        sidenav.style.right = "-250px";
        menu.src = "img/menu.png";
    }
};

//landing page
var countDownDate = new Date("janu 2, 2022 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }

}, 1000);

//slider up down
var slide = document.getElementById("slide");
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");

var a = 0;

upArrow.onclick = function() {
    if (a < 0) {
        a = a + 300;
        slide.style.top = a + "px";
    }

};
downArrow.onclick = function() {
    if (a > "-2100") {
        a = a - 300;
        slide.style.top = a + "px";
    }

};