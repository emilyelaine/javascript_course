$(document).ready(function() {
	$(".event").hover(function() {
		$(this).addClass("hoverStyle");
	}, function() {
		$(this).removeClass("hoverStyle");
	});
});