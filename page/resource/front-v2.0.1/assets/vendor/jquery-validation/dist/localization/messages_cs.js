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
 * Locale: CS (Czech; 膷e拧tina, 膷esk媒 jazyk)
 */
$.extend( $.validator.messages, {
	required: "Tento 煤daj je povinn媒.",
	remote: "Pros铆m, opravte tento 煤daj.",
	email: "Pros铆m, zadejte platn媒 e-mail.",
	url: "Pros铆m, zadejte platn茅 URL.",
	date: "Pros铆m, zadejte platn茅 datum.",
	dateISO: "Pros铆m, zadejte platn茅 datum (ISO).",
	number: "Pros铆m, zadejte 膷铆slo.",
	digits: "Pros铆m, zad谩vejte pouze 膷铆slice.",
	creditcard: "Pros铆m, zadejte 膷铆slo kreditn铆 karty.",
	equalTo: "Pros铆m, zadejte znovu stejnou hodnotu.",
	extension: "Pros铆m, zadejte soubor se spr谩vnou p艡铆ponou.",
	maxlength: $.validator.format( "Pros铆m, zadejte nejv铆ce {0} znak暖." ),
	minlength: $.validator.format( "Pros铆m, zadejte nejm茅n臎 {0} znak暖." ),
	rangelength: $.validator.format( "Pros铆m, zadejte od {0} do {1} znak暖." ),
	range: $.validator.format( "Pros铆m, zadejte hodnotu od {0} do {1}." ),
	max: $.validator.format( "Pros铆m, zadejte hodnotu men拧铆 nebo rovnu {0}." ),
	min: $.validator.format( "Pros铆m, zadejte hodnotu v臎t拧铆 nebo rovnu {0}." )
} );
return $;
}));