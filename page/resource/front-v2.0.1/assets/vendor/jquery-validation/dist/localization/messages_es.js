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
 */
$.extend( $.validator.messages, {
	required: "Este campo es obligatorio.",
	remote: "Por favor, rellena este campo.",
	email: "Por favor, escribe una direcci贸n de correo v谩lida.",
	url: "Por favor, escribe una URL v谩lida.",
	date: "Por favor, escribe una fecha v谩lida.",
	dateISO: "Por favor, escribe una fecha (ISO) v谩lida.",
	number: "Por favor, escribe un n煤mero v谩lido.",
	digits: "Por favor, escribe s贸lo d铆gitos.",
	creditcard: "Por favor, escribe un n煤mero de tarjeta v谩lido.",
	equalTo: "Por favor, escribe el mismo valor de nuevo.",
	extension: "Por favor, escribe un valor con una extensi贸n aceptada.",
	maxlength: $.validator.format( "Por favor, no escribas m谩s de {0} caracteres." ),
	minlength: $.validator.format( "Por favor, no escribas menos de {0} caracteres." ),
	rangelength: $.validator.format( "Por favor, escribe un valor entre {0} y {1} caracteres." ),
	range: $.validator.format( "Por favor, escribe un valor entre {0} y {1}." ),
	max: $.validator.format( "Por favor, escribe un valor menor o igual a {0}." ),
	min: $.validator.format( "Por favor, escribe un valor mayor o igual a {0}." ),
	nifES: "Por favor, escribe un NIF v谩lido.",
	nieES: "Por favor, escribe un NIE v谩lido.",
	cifES: "Por favor, escribe un CIF v谩lido."
} );
return $;
}));