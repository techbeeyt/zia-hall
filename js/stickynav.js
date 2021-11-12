window.onscroll = function() { myFunction() };

var navbar = document.getElementById("header--container");
var quickLinks = document.getElementById("header--quicklinks")
var sticky = quickLinks.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("header--container-scroll");
        quickLinks.classList.add("header--quicklinks-scroll");
    } else {
        navbar.classList.remove("header--container-scroll");
        quickLinks.classList.remove("header--quicklinks-scroll");
    }
}