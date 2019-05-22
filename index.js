
$(document).ready(function () {
    var scrollLink = $(".scroll-link");
    scrollLink.click(function (event) {
        if ($(this.hash) !== "" || $(this.hash) !== "undefined") {
            event.preventDefault();
            $("body,html").animate({
                scrollTop: $(this.hash).offset().top - 30
            }, "slow");
        }
    });
});

$(document).ready(function(){
    if($(window).width() > 800) $(".btn-header").remove();
    else $(".btn-header").add();
    if($(window).width() < 1023){
        // $(".align-items-center").remove();
    }
});


