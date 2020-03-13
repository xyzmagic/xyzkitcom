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
 * Locale: LV (Latvian; latvie拧u valoda)
 */
$.extend( $.validator.messages, {
	required: "艩is lauks ir oblig膩ts.",
	remote: "L奴dzu, p膩rbaudiet 拧o lauku.",
	email: "L奴dzu, ievadiet der墨gu e-pasta adresi.",
	url: "L奴dzu, ievadiet der墨gu URL adresi.",
	date: "L奴dzu, ievadiet der墨gu datumu.",
	dateISO: "L奴dzu, ievadiet der墨gu datumu (ISO).",
	number: "L奴dzu, ievadiet der墨gu numuru.",
	digits: "L奴dzu, ievadiet tikai ciparus.",
	creditcard: "L奴dzu, ievadiet der墨gu kred墨tkartes numuru.",
	equalTo: "L奴dzu, ievadiet to pa拧u v膿lreiz.",
	extension: "L奴dzu, ievadiet v膿rt墨bu ar der墨gu papla拧in膩jumu.",
	maxlength: $.validator.format( "L奴dzu, ievadiet ne vair膩k k膩 {0} rakstz墨mes." ),
	minlength: $.validator.format( "L奴dzu, ievadiet vismaz {0} rakstz墨mes." ),
	rangelength: $.validator.format( "L奴dzu ievadiet {0} l墨dz {1} rakstz墨mes." ),
	range: $.validator.format( "L奴dzu, ievadiet skaitli no {0} l墨dz {1}." ),
	max: $.validator.format( "L奴dzu, ievadiet skaitli, kur拧 ir maz膩ks vai vien膩ds ar {0}." ),
	min: $.validator.format( "L奴dzu, ievadiet skaitli, kur拧 ir liel膩ks vai vien膩ds ar {0}." )
} );
return $;
}));