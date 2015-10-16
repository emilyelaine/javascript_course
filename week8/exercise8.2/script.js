var
	getFortune = document.getElementById('generateFortune');


function showFortune() {
	document.getElementById('generateFortune').addEventListener('click', function() {
		if (document.getElementById('generateFortune')) {
			getFortune.innerHTML = ('Wealth awaits you very soon.');
			getFortune.setAttribute('class', 'fortune');
		}	
	});
};

showFortune();