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
 * Locale: SK (Slovak; sloven膷ina, slovensk媒 jazyk)
 */
$.extend( $.validator.messages, {
	required: "Povinn茅 zada钮.",
	maxlength: $.validator.format( "Maxim谩lne {0} znakov." ),
	minlength: $.validator.format( "Minim谩lne {0} znakov." ),
	rangelength: $.validator.format( "Minim谩lne {0} a maxim谩lne {1} znakov." ),
	email: "E-mailov谩 adresa mus铆 by钮 platn谩.",
	url: "URL mus铆 by钮 platn谩.",
	date: "Mus铆 by钮 d谩tum.",
	number: "Mus铆 by钮 膷铆slo.",
	digits: "M么啪e obsahova钮 iba 膷铆slice.",
	equalTo: "Dve hodnoty sa musia rovna钮.",
	range: $.validator.format( "Mus铆 by钮 medzi {0} a {1}." ),
	max: $.validator.format( "Nem么啪e by钮 viac ako {0}." ),
	min: $.validator.format( "Nem么啪e by钮 menej ako {0}." ),
	creditcard: "膶铆slo platobnej karty mus铆 by钮 platn茅."
} );
return $;
}));