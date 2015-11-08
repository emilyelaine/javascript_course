$('document').ready(function() {

	//adds the icon image in front of each menu tab
	$('div#menu ul li a').prepend('<img src="icon.png">');

	//change the background color for header div when clicking the h1
	$('div#header h1').click(function() {
		$('div#header').css('backgroundColor',"#993333")
	});

	//changes the text color of the first list item in the sidebar
	$('li#sidebar_content_1 ul li a').first().css('color','#993333');

	//move even numbered list items 5 px to the right in the sidebar
	$('li#sidebar_content_2 ul li:even').css('paddingLeft', '5px');

	//replace the content when clicking on the post content
	$('h2.title').click(function() {
		$('div#content').html('Congratulations! You have sucessfully replaced the content.')
	});

	//clicking on h2 in the sidebar hides the ul content below
 	$('div#sidebar-content h2').click(function() {
		$(this).next('ul').toggle("fast");
	});

});