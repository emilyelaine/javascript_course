
function animalYears(a,y) {
	var result = a / y;
	return result;
}


var age = window.prompt('How old are you?');
if (age != null) {
	mainBody.innerHTML += 'In human years, you are ' + age + ' years old.</br></br>';
	mainBody.innerHTML += 'In dog years, you are ' + animalYears(age,14) + ' years old.</br></br>';
	mainBody.innerHTML += 'In cat years, you are ' + animalYears(age,7) + ' years old.</br></br>';
	mainBody.innerHTML += 'In tortoise years, you are ' + animalYears(age,3) + ' years old.';
}


