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
 * Locale: RO (Romanian, limba rom芒n膬)
 */
$.extend( $.validator.messages, {
	required: "Acest c芒mp este obligatoriu.",
	remote: "Te rug膬m s膬 completezi acest c芒mp.",
	email: "Te rug膬m s膬 introduci o adres膬 de email valid膬",
	url: "Te rug膬m sa introduci o adres膬 URL valid膬.",
	date: "Te rug膬m s膬 introduci o dat膬 corect膬.",
	dateISO: "Te rug膬m s膬 introduci o dat膬 (ISO) corect膬.",
	number: "Te rug膬m s膬 introduci un num膬r 卯ntreg valid.",
	digits: "Te rug膬m s膬 introduci doar cifre.",
	creditcard: "Te rug膬m s膬 introduci un numar de carte de credit valid.",
	equalTo: "Te rug膬m s膬 reintroduci valoarea.",
	extension: "Te rug膬m s膬 introduci o valoare cu o extensie valid膬.",
	maxlength: $.validator.format( "Te rug膬m s膬 nu introduci mai mult de {0} caractere." ),
	minlength: $.validator.format( "Te rug膬m s膬 introduci cel pu葲in {0} caractere." ),
	rangelength: $.validator.format( "Te rug膬m s膬 introduci o valoare 卯ntre {0} 葯i {1} caractere." ),
	range: $.validator.format( "Te rug膬m s膬 introduci o valoare 卯ntre {0} 葯i {1}." ),
	max: $.validator.format( "Te rug膬m s膬 introduci o valoare egal sau mai mic膬 dec芒t {0}." ),
	min: $.validator.format( "Te rug膬m s膬 introduci o valoare egal sau mai mare dec芒t {0}." )
} );
return $;
}));