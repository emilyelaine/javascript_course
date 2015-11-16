$(document).ready(function() {

//expand menu navigation
$('p#menuButton').click(function() {
	$('nav').toggle(200, 'linear');
});

//show div recipe content
//add unique id to 
$(div.recipe h2).each(function(i) {
	$(this).parent().attr('id', 'recipe' + i);

$(nav ul a li).each(function(i) {
	$(this).append('a[href="#recipe' + i + '"]')
})

//hides all recipe content
 $('div.recipe').css('display', 'none');

 //add click events 
 $('nav ul a').click(function(){
        $('section div').css('display', 'none');
        $('#'+this.id).css('display', 'block');
    });
});

});