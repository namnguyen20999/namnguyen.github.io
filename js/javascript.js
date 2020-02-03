$(function() {
    var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();

//Create filtering
var $container = $('.grid');

$(".button-group button").click(function(){
    $(".button-group button").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");
    $container.isotope({
        filter: selector
    });
    return false;
});

$(".button-group-tool button").click(function(){
    $(".button-group-tool button").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");
    $(".tool").isotope({
        filter: selector
    });
    return false;
});
});

