$(function() {
    var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();

$(".grid").isotope({
    layoutMode: "fitRows",
    fitRows:{
        gutter: 0
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

});

