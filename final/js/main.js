//email validation for newsletter
function validateEmail(inputText) {
	var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if(inputText.value.match(mailFormat)) {
		alert('Thanks for signing up for our newsletter!');
		document.newsletter.focus();
		return true;
		}
	else {
		alert('You entered an invalid email address.  Please try again!');
		return false;
	};
};

//image slider for home page
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
