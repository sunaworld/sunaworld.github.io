$(document).ready(function () {
    $(".hamburger-icon").mouseenter(function () {
        $(".main-navigation nav").show();
    });

    $(".main-navigation nav").mouseleave(function (){
        $(".main-navigation nav").hide();
    });

});