$(function() {
	$(document).on("click", function(){
		$("div.drop-down-orang-blc").removeClass("active-blc");
		$(".dropdown-toggle").removeClass("active-color-dropdown-toggle");
		console.log("clicked");
	});
	$(".dropdown-toggle").on("click", function(){
		// if(!$(".dropdown-toggle").parents("div.dropdown").hasClass("open"))
		// {
		// 	$(".drop-down-orang-blc").removeClass("active-blc");
		// }
		$(".drop-down-orang-blc").removeClass("active-blc");
		$(this).parents(".drop-down-orang-blc").toggleClass("active-blc");
		$(this).toggleClass("active-color-dropdown-toggle");
		// 333333
	});

});
