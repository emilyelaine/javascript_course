function imgSlider() {
		var currentImage = $('#slideshow div.current');
		var nextImage = currentImage.next();
		if (nextImage.length === 0) {
			nextImage = $('#slideshow div:first')
		};
		
		currentImage.removeClass('current').addClass('previous');
		nextImage.css('opacity', 0).addClass('current').animate({opacity: 1}, 1200, function() {
					currentImage.removeClass('previous');
				});
	};

$('document').ready(function() {
	
		setInterval('imgSlider()', 5000); 

});