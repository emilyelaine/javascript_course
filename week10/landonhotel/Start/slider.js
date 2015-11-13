function imgSlider() {
		var currentImage = $('#hero div.current');
		var nextImage = currentImage.next();
		if (nextImage.length === 0) {
			nextImage = $('#hero div:first')
		};
		
		currentImage.removeClass('current').addClass('previous');
		nextImage.css('opacity', 0).addClass('current').animate({opacity: 1}, 1200, function() {
					currentImage.removeClass('previous');
				});
	};

$('document').ready(function() {
	
		setInterval('imgSlider()', 3500); 

});