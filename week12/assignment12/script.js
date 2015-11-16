$(document).ready(function() {

//expand menu navigation
$('p#menuButton').click(function() {
	$('nav').toggle(200);
});

$(window).load(function() {
	$('.recipe').hide();
})

//show div section when associated link is clicked http://stackoverflow.com/questions/30157277/show-hide-multiple-divs-only-one-at-a-time-jquery
$('.showHide').on('click', function() {
    $('.recipe').fadeOut('slow');
    $('.recipe').eq($(this).index()).fadeIn('slow', 'linear');
});

$(window).load(function() {
	('h1').animate(
		{left: 500},
		'slow'
	);
});
});
