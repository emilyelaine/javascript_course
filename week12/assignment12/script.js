$(document).ready(function() {

//expand menu navigation
$('p#menuButton').click(function() {
	$('nav').toggle(200);
});

//hides recipe content when first loading the page
$(window).load(function() {
	$('.recipe').hide();
})

//show div section when associated link is clicked 
$('.showHide').on('click', function() {
    $('.recipe').fadeOut('slow');
    $('.recipe').eq($(this).index()).fadeIn('slow', 'linear');
});


//shifts h2 position when hovering over the element
$('h2').hover(function() {
	$('h2').animate(
		{left: 20},
		'fast'
		);
});

});
