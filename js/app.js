var main = function () {
	"use strict";

	// getJSON even parses the JSON for us, so we dont need to
	// call JSON.parse
	$.getJSON("cards/aceOfSpades.json", function (card) {
		// Print the card to the console
		console.log(card);
	});
}

$(document).ready(main);