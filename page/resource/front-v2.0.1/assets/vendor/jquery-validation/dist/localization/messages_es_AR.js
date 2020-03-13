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
 * Locale: ES (Spanish; Espa帽ol)
 * Region: AR (Argentina)
 */
$.extend( $.validator.messages, {
	required: "Este campo es obligatorio.",
	remote: "Por favor, complet谩 este campo.",
	email: "Por favor, escrib铆 una direcci贸n de correo v谩lida.",
	url: "Por favor, escrib铆 una URL v谩lida.",
	date: "Por favor, escrib铆 una fecha v谩lida.",
	dateISO: "Por favor, escrib铆 una fecha (ISO) v谩lida.",
	number: "Por favor, escrib铆 un n煤mero entero v谩lido.",
	digits: "Por favor, escrib铆 s贸lo d铆gitos.",
	creditcard: "Por favor, escrib铆 un n煤mero de tarjeta v谩lido.",
	equalTo: "Por favor, escrib铆 el mismo valor de nuevo.",
	extension: "Por favor, escrib铆 un valor con una extensi贸n aceptada.",
	maxlength: $.validator.format( "Por favor, no escribas m谩s de {0} caracteres." ),
	minlength: $.validator.format( "Por favor, no escribas menos de {0} caracteres." ),
	rangelength: $.validator.format( "Por favor, escrib铆 un valor entre {0} y {1} caracteres." ),
	range: $.validator.format( "Por favor, escrib铆 un valor entre {0} y {1}." ),
	max: $.validator.format( "Por favor, escrib铆 un valor menor o igual a {0}." ),
	min: $.validator.format( "Por favor, escrib铆 un valor mayor o igual a {0}." ),
	nifES: "Por favor, escrib铆 un NIF v谩lido.",
	nieES: "Por favor, escrib铆 un NIE v谩lido.",
	cifES: "Por favor, escrib铆 un CIF v谩lido."
} );
return $;
}));