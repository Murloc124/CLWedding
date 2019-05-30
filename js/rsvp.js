$("form").submit(function(e) {
	e.preventDefault();

	var naamValue = document.forms["rsvp"]["naam"].value;
	
	if (naamValue == "" || !naamValue.replace(/\s/g, '').length) {
		alert("Gelieve het Naam veld in te vullen.");
		return;
	}
	
	//Verwerk form submit + Redirect
});

$(function() {
	$('input,select,textarea').persist();
});