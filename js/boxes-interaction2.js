$(document).ready(function() {
    $(".select-theme1").click(function(){
        $(".theme1").toggle();

    });
    $(".select-theme2").click(function(){
        $(".theme2").toggle();
    });
    $(".select-theme3").click(function(){
        $(".theme3").toggle();
    });
    
    $("div").click(function() {
        $(this).toggleClass("bananas")
    });
});