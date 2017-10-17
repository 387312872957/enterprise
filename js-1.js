window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 89 || document.documentElement.scrollTop > 89) {
        document.getElementById("topbtn").style.display = "block";
    } else {
        document.getElementById("topbtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
document.getElementById("main").style.marginLeft= "0";
}
