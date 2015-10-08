var newHeading = document.createElement ("h1");
var newParagraph = document.createElement ("p");

var h1Text = document.createTextNode ("Welcome to the Site!");
var paraText = document.createTextNode ("I don't have too much to say except I'm currently learning about the DOM. I created this page to practice my JavaScript skills.");

newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);

document.getElementById("mainBody").appendChild(newHeading);
document.getElementById("mainBody").appendChild(newParagraph);


function preparePage() {
	document.getElementById("mainBody").onclick = function() {
		if (document.getElementById("mainBody").className == "change") {
			document.getElementById("mainBody").className = "";
		}
		else {
			document.getElementById("mainBody").className = "change";
		};
	}
};

window.onload = function() {
	preparePage();
}
