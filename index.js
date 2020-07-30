$("a").on("click", function() {
	var position = $($(this).attr("href")).offset().top;
    console.log(position);
    $("html, body").animate({scrollTop:position}, 500);
})
