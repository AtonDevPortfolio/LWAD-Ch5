var main = function () {
	"use strict";

	console.log("Taily Po.");
	// getJSON even parses the JSON for us, so we dont need to
	// call JSON.parse
	$.getJSON("cards/aceOfSpades.json", function (card) {
		// create an element to hold the card
		var $cardParagraph = $("<p>");

		// add text to the paragraph element
		$cardParagraph.text(card.rank + " of " + card.suit);

		// append the card paragraph to main
		$("main").append($cardParagraph);
	});
}

$(document).ready(main);