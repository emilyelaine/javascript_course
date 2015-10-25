$(document).ready(function() {
	var
		getFortune = document.getElementById('generateFortune')
	;

	//changes text in the generateFortune ID when clicked and adds class of fortune
	$('#generateFortune').click(function() {
		if ($('generateFortune')) {
			$('#generateFortune').html('Wealth awaits you very soon.');
			$(getFortune).attr('class', 'fortune');
		}	
	});
});