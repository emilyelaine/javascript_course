$('document').ready(function() {
		var count = 0
			locationsList = $("<ul> id='locationTag'")
		;

		$('.content h2').each(function(idClass, element) {
			$(this).html("<a name='locationTag" + count + "'></a>" + $(this).html());
			locationsList.append($("<li><a href='#locationTag" + count++ + "'>" + $(this).text() + '</a></li>'));
		});

		$('.content h1').after(locationsList);
	
	});