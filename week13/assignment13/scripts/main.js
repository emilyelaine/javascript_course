$(document).ready(function() {

//click on the card to flip and reveal the back side of the card
$(function(){
    $(".card").flip({
        trigger: "click"
    });
});

//highlight the card selected on hover
$('.front').mouseover(function() {
	$(this).css({
			"border-color": "B22222", 
            "border-weight": "5px", 
            "border-style": "solid",
            "border-radius": 25
    });
});

//remove highlight on mouseout
$('.front').mouseout(function() {
	$(this).css({
			"border-color": "#0099CC",
			"border-weight": "5px",
			"border-style": "solid",
			"border-radius": 25
	});

});

});