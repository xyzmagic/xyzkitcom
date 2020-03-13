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
 * Region: PE (Per煤)
 */
$.extend( $.validator.messages, {
	required: "Este campo es obligatorio.",
	remote: "Por favor, llene este campo.",
	email: "Por favor, escriba un correo electr贸nico v谩lido.",
	url: "Por favor, escriba una URL v谩lida.",
	date: "Por favor, escriba una fecha v谩lida.",
	dateISO: "Por favor, escriba una fecha (ISO) v谩lida.",
	number: "Por favor, escriba un n煤mero v谩lido.",
	digits: "Por favor, escriba s贸lo d铆gitos.",
	creditcard: "Por favor, escriba un n煤mero de tarjeta v谩lido.",
	equalTo: "Por favor, escriba el mismo valor de nuevo.",
	extension: "Por favor, escriba un valor con una extensi贸n permitida.",
	maxlength: $.validator.format( "Por favor, no escriba m谩s de {0} caracteres." ),
	minlength: $.validator.format( "Por favor, no escriba menos de {0} caracteres." ),
	rangelength: $.validator.format( "Por favor, escriba un valor entre {0} y {1} caracteres." ),
	range: $.validator.format( "Por favor, escriba un valor entre {0} y {1}." ),
	max: $.validator.format( "Por favor, escriba un valor menor o igual a {0}." ),
	min: $.validator.format( "Por favor, escriba un valor mayor o igual a {0}." ),
	nifES: "Por favor, escriba un NIF v谩lido.",
	nieES: "Por favor, escriba un NIE v谩lido.",
	cifES: "Por favor, escriba un CIF v谩lido."
} );
return $;
}));