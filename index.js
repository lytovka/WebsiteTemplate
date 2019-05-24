(function ($) {
    
    $(document).ready(function () {
        var scrollLink = $(".scroll-link");
        scrollLink.click(function (event) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $("body,html").animate({
                    scrollTop: $(this.hash).offset().top - 30
                }, "slow");
            }
        });

        if($(window).width() < 968){
			$(".navbar-nav > li > a").bind("click", function(event){
				$("#navbarSupportedContent").collapse("hide");
			});
		}
    });

})(this.jQuery);
