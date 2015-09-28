//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];

var userName = window.prompt("What is your name?");

if(userName.length > 0 && userName !== "") {
  console.log ('Hi ' + userName + "!");
}
else {
  console.log ("Ok, I'll just call you user.");
}

document.getElementById('BtnDonate').addEventListener('click', function(){
  var favAuthor = window.prompt("Which author is your favorite?")
  var result;

  switch (favAuthor)  {
      case "Churchill":
        result = console.log (churchillSpeech.author + ' was ' + churchillSpeech.authorAge + ' during this speech.');
      break;

      case "Ghandi":
        result = console.log (ghandiSpeech.author + ' was ' + ghandiSpeech.authorAge + ' during this speech.');
      break;

      case "Demosthenes":
        result = console.log (demosthenesSpeech.author + ' was ' + demosthenesSpeech.authorAge + ' during this speech.');
      break;

      default:
        result = console.log ("That is not a valid entry.  Please choose one of the authors listed on our site.");
      break;
  }
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  if (churchillSpeech.yearisBCE === false) {
    console.log("This speech took place during the common era");
  }
  else {
    console.log("This speech took place before the common era.");
  }

   if (churchillSpeech.year < ghandiSpeech.year && churchillSpeech.year < demosthenesSpeech.year) {
    console.log("This is the oldest speech on the page.");
 } else if (churchillSpeech.year > ghandiSpeech.year && churchillSpeech.year > demosthenesSpeech.year) {
    console.log("This is the most recent speech on the page.");
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  if (ghandiSpeech.yearIsBCE === false) {
    console.log("This speech took place during the common era.");
  }
  else {
    console.log("This speech took place before the common era.");
  }

   if (ghandiSpeech.year < churchillSpeech.year && ghandiSpeech.year < demosthenesSpeech.year) {
    console.log("This is the oldest speech on the page.");
 } else if (ghandiSpeech.year > churchillSpeech.year && ghandiSpeech.year > demosthenesSpeech.year) {
    console.log("This is the most recent speech on the page.");
 }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  if (demosthenesSpeech.yearIsBCE === false) {
    console.log("This speech took place during the common era");
  }
  else {
    console.log("This speech took place before the common era.");
  }

   if (demosthenesSpeech.year < churchillSpeech.year && demosthenesSpeech.year < ghandiSpeech.year) {
    console.log("This is the oldest speech on the page.");
 } else if (demosthenesSpeech.year > churchillSpeech.year && demosthenesSpeech.year > ghandiSpeech.year) {
    console.log("This is the most recent speech on the page.");
 }
});