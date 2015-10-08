var newHeading = document.createElement ("h1");
var newParagraph = document.createElement ("p");

var h1Text = document.createTextNode ("Welcome to the Site!");
var paraText = document.createTextNode ("I don't have much to say but I'm learning all about the DOM. I created this page to practice adding elements.");

newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);

document.getElementById("mainBody").appendChild(newHeading);
document.getElementById("mainBody").appendChild(newParagraph);

var paraContent = mainBody.getElementsByTagName("p");
paraContent[0].setAttribute("align", "center");