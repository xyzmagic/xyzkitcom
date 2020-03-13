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
 * Locale: ET (Estonian; eesti, eesti keel)
 */
$.extend( $.validator.messages, {
	required: "See v盲li peab olema t盲idetud.",
	maxlength: $.validator.format( "Palun sisestage v盲hem kui {0} t盲hem盲rki." ),
	minlength: $.validator.format( "Palun sisestage v盲hemalt {0} t盲hem盲rki." ),
	rangelength: $.validator.format( "Palun sisestage v盲盲rtus vahemikus {0} kuni {1} t盲hem盲rki." ),
	email: "Palun sisestage korrektne e-maili aadress.",
	url: "Palun sisestage korrektne URL.",
	date: "Palun sisestage korrektne kuup盲ev.",
	dateISO: "Palun sisestage korrektne kuup盲ev (YYYY-MM-DD).",
	number: "Palun sisestage korrektne number.",
	digits: "Palun sisestage ainult numbreid.",
	equalTo: "Palun sisestage sama v盲盲rtus uuesti.",
	range: $.validator.format( "Palun sisestage v盲盲rtus vahemikus {0} kuni {1}." ),
	max: $.validator.format( "Palun sisestage v盲盲rtus, mis on v盲iksem v玫i v玫rdne arvuga {0}." ),
	min: $.validator.format( "Palun sisestage v盲盲rtus, mis on suurem v玫i v玫rdne arvuga {0}." ),
	creditcard: "Palun sisestage korrektne krediitkaardi number."
} );
return $;
}));