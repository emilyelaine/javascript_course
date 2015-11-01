$('document').ready(function() {

//Background color is changed when any a element is clicked
$('a').click(function() {
	var backgroundColor = $(this).css('backgroundColor', '#FFFFCC');
});

//Changes color of text on the main menu to be readable with clicked background color
$('#menu .backgroundClick').click(function() {
	var menuBackgroundColor = $(this).css('color', '#000');
});

//toggle the post content on and off
$('h2.title').click(function() {
	$(this).next('div').toggle("slow");
});

//hide the post content
//$('h2.title').click(function() {
//	$(this).hide('slow');
//	$(this).next('div').hide('slow');
//});

});
