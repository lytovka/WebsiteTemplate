$(document).ready(function(){
    if($(window).width() > 800) $(".btn-header").remove();
    else $(".btn-header").add();
});