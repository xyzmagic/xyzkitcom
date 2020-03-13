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
 * Locale: PL (Polish; j臋zyk polski, polszczyzna)
 */
$.extend( $.validator.messages, {
	required: "To pole jest wymagane.",
	remote: "Prosz臋 o wype艂nienie tego pola.",
	email: "Prosz臋 o podanie prawid艂owego adresu email.",
	url: "Prosz臋 o podanie prawid艂owego URL.",
	date: "Prosz臋 o podanie prawid艂owej daty.",
	dateISO: "Prosz臋 o podanie prawid艂owej daty (ISO).",
	number: "Prosz臋 o podanie prawid艂owej liczby.",
	digits: "Prosz臋 o podanie samych cyfr.",
	creditcard: "Prosz臋 o podanie prawid艂owej karty kredytowej.",
	equalTo: "Prosz臋 o podanie tej samej warto艣ci ponownie.",
	extension: "Prosz臋 o podanie warto艣ci z prawid艂owym rozszerzeniem.",
	nipPL: "Prosz臋 o podanie prawid艂owego numeru NIP.",
	maxlength: $.validator.format( "Prosz臋 o podanie nie wi臋cej ni偶 {0} znak贸w." ),
	minlength: $.validator.format( "Prosz臋 o podanie przynajmniej {0} znak贸w." ),
	rangelength: $.validator.format( "Prosz臋 o podanie warto艣ci o d艂ugo艣ci od {0} do {1} znak贸w." ),
	range: $.validator.format( "Prosz臋 o podanie warto艣ci z przedzia艂u od {0} do {1}." ),
	max: $.validator.format( "Prosz臋 o podanie warto艣ci mniejszej b膮d藕 r贸wnej {0}." ),
	min: $.validator.format( "Prosz臋 o podanie warto艣ci wi臋kszej b膮d藕 r贸wnej {0}." ),
	pattern: $.validator.format( "Pole zawiera niedozwolone znaki." )
} );
return $;
}));