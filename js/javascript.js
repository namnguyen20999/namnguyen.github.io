$(function() {
    var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();

$(".grid").isotope({
    itemSelector: '.my-project',
    layoutMode: "fitRows",
    fitRows:{
        gutter:0;
    }
});

$(".button-group button").click(function(){
    $(".button-group button").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");
    $(".grid").isotope({
        filter: selector
    });
    return false;
});

$(".tool").isotope({
    layoutMode: "fitRows",
    fitRows:{
        gutter: 10
    }
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

