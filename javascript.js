$(document).ready(function() {
    $(".head .menu li:nth-child(1) a").click(function(e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $(".content-1").offset().top }, 400);
    });
    $(".head .menu li:nth-child(2) a").click(function(e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $(".content-2").offset().top }, 400);
    });
    $(".head .menu li:nth-child(3)").click(function(e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $(".content-3").offset().top }, 400);
    });
    $(".head .menu li:nth-child(4)").click(function(e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $(".content-4").offset().top }, 400);
    });
    $(".pass-1 .content-1 button").click(function(e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $(".content-2").offset().top }, 400);
    });
    $(".pass-2 .content-2 .sub-content-2 .nut2").click(function(e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $(".content-3").offset().top }, 400);
    });
    $(".pass-1 .head .title span a").click(function(e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $(".content-1").offset().top }, 400);
    });
});
window.onscroll = function() { myFunction() };

var head = document.getElementById("head");
var sticky = head.offsetTop;

function myFunction() {
    if (window.pageYOffset >= 100) {
        head.classList.add("sticky")
    } else if (window.pageYOffset === 0) {
        head.classList.remove("sticky");
    }
}