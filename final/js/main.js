//email validation for newsletter
function validateEmail() {
	var mailFormat = /(.+)@(.+){2,}\.(.+){2,}/;
	var emailText = document.getElementById('email').value;

	if(mailFormat.test(emailText)) {
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
