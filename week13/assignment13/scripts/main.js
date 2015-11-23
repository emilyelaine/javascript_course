 $('document').ready(function() {

//hide answers on page load
$(window).load(function() {
	$('div.back img, div.back h3').hide();
})

//show specific state capital when user clicks a state
 $('.alabama div.front').click(function() {
 	$('.alabama div.back img').eq($(this).index()).fadeIn('fast', 'linear');
 	$('.alabama div.back h3').eq($(this).index()).fadeIn('fast', 'linear');
});

$('.alaska div.front').click(function() {
 	$('.alaska div.back img').eq($(this).index()).fadeIn('fast', 'linear');
 	$('.alaska div.back h3').eq($(this).index()).fadeIn('fast', 'linear');
});

$('.arizona div.front').click(function() {
 	$('.arizona div.back img').eq($(this).index()).fadeIn('fast', 'linear');
 	$('.arizona div.back h3').eq($(this).index()).fadeIn('fast', 'linear');
});

$('.arkansas div.front').click(function() {
 	$('.arkansas div.back img').eq($(this).index()).fadeIn('fast', 'linear');
 	$('.arkansas div.back h3').eq($(this).index()).fadeIn('fast', 'linear');
});

$('.california div.front').click(function() {
 	$('.california div.back img').eq($(this).index()).fadeIn('fast', 'linear');
 	$('.california div.back h3').eq($(this).index()).fadeIn('fast', 'linear');
});

$('.colorado div.front').click(function() {
 	$('.colorado div.back img').eq($(this).index()).fadeIn('fast', 'linear');
 	$('.colorado div.back h3').eq($(this).index()).fadeIn('fast', 'linear');
});

//hide the capital when clicked
 $('div.back').click(function() {
 	$('div.back img, div.back h3').hide('fast');
 })

});