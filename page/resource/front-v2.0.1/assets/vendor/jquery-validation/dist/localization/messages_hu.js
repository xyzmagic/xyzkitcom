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
 * Locale: HU (Hungarian; Magyar)
 */
$.extend( $.validator.messages, {
	required: "K枚telez艖 megadni.",
	maxlength: $.validator.format( "Legfeljebb {0} karakter hossz煤 legyen." ),
	minlength: $.validator.format( "Legal谩bb {0} karakter hossz煤 legyen." ),
	rangelength: $.validator.format( "Legal谩bb {0} 茅s legfeljebb {1} karakter hossz煤 legyen." ),
	email: "脡rv茅nyes e-mail c铆mnek kell lennie.",
	url: "脡rv茅nyes URL-nek kell lennie.",
	date: "D谩tumnak kell lennie.",
	number: "Sz谩mnak kell lennie.",
	digits: "Csak sz谩mjegyek lehetnek.",
	equalTo: "Meg kell egyeznie a k茅t 茅rt茅knek.",
	range: $.validator.format( "{0} 茅s {1} k枚z茅 kell esnie." ),
	max: $.validator.format( "Nem lehet nagyobb, mint {0}." ),
	min: $.validator.format( "Nem lehet kisebb, mint {0}." ),
	creditcard: "脡rv茅nyes hitelk谩rtyasz谩mnak kell lennie.",
	remote: "K茅rem jav铆tsa ki ezt a mez艖t.",
	dateISO: "K茅rem 铆rjon be egy 茅rv茅nyes d谩tumot (ISO).",
	step: $.validator.format( "A {0} egyik t枚bbsz枚r枚s茅t adja meg." )
} );
return $;
}));