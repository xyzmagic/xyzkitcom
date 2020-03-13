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
 * Locale: CA (Catalan; catal脿)
 */
$.extend( $.validator.messages, {
	required: "Aquest camp 茅s obligatori.",
	remote: "Si us plau, omple aquest camp.",
	email: "Si us plau, escriu una adre莽a de correu-e v脿lida",
	url: "Si us plau, escriu una URL v脿lida.",
	date: "Si us plau, escriu una data v脿lida.",
	dateISO: "Si us plau, escriu una data (ISO) v脿lida.",
	number: "Si us plau, escriu un n煤mero enter v脿lid.",
	digits: "Si us plau, escriu nom茅s d铆gits.",
	creditcard: "Si us plau, escriu un n煤mero de tarjeta v脿lid.",
	equalTo: "Si us plau, escriu el mateix valor de nou.",
	extension: "Si us plau, escriu un valor amb una extensi贸 acceptada.",
	maxlength: $.validator.format( "Si us plau, no escriguis m茅s de {0} caracters." ),
	minlength: $.validator.format( "Si us plau, no escriguis menys de {0} caracters." ),
	rangelength: $.validator.format( "Si us plau, escriu un valor entre {0} i {1} caracters." ),
	range: $.validator.format( "Si us plau, escriu un valor entre {0} i {1}." ),
	max: $.validator.format( "Si us plau, escriu un valor menor o igual a {0}." ),
	min: $.validator.format( "Si us plau, escriu un valor major o igual a {0}." )
} );
return $;
}));