(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: DA (Danish; dansk)
 */
$.extend( $.validator.messages, {
	required: "Dette felt er p氓kr忙vet.",
	maxlength: $.validator.format( "Indtast h酶jst {0} tegn." ),
	minlength: $.validator.format( "Indtast mindst {0} tegn." ),
	rangelength: $.validator.format( "Indtast mindst {0} og h酶jst {1} tegn." ),
	email: "Indtast en gyldig email-adresse.",
	url: "Indtast en gyldig URL.",
	date: "Indtast en gyldig dato.",
	number: "Indtast et tal.",
	digits: "Indtast kun cifre.",
	equalTo: "Indtast den samme v忙rdi igen.",
	range: $.validator.format( "Angiv en v忙rdi mellem {0} og {1}." ),
	max: $.validator.format( "Angiv en v忙rdi der h酶jst er {0}." ),
	min: $.validator.format( "Angiv en v忙rdi der mindst er {0}." ),
	creditcard: "Indtast et gyldigt kreditkortnummer."
} );
return $;
}));