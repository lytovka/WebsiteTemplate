
$(document).ready(function () {
    var scrollLink = $(".scroll-link");
    // console.log($(this.hash).offset().top);
    scrollLink.click(function (event) {
        if ($(this.hash) !== "" || $(this.hash) !== "undefined") {
            event.preventDefault();
            $("body,html").animate({
                scrollTop: $(this.hash).offset().top - 20
            }, 1000);
        }
    });
});

$(document).ready(function(){
    if($(window).width() > 800) $(".btn-header").remove();
    else $(".btn-header").add();
});
