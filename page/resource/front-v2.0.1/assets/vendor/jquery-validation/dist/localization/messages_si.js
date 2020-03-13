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
 * Locale: SI (Slovenian)
 */
$.extend( $.validator.messages, {
	required: "To polje je obvezno.",
	remote: "Vpis v tem polju ni v pravi obliki.",
	email: "Prosimo, vnesite pravi email naslov.",
	url: "Prosimo, vnesite pravi URL.",
	date: "Prosimo, vnesite pravi datum.",
	dateISO: "Prosimo, vnesite pravi datum (ISO).",
	number: "Prosimo, vnesite pravo 拧tevilko.",
	digits: "Prosimo, vnesite samo 拧tevilke.",
	creditcard: "Prosimo, vnesite pravo 拧tevilko kreditne kartice.",
	equalTo: "Prosimo, ponovno vnesite enako vsebino.",
	extension: "Prosimo, vnesite vsebino z pravo kon膷nico.",
	maxlength: $.validator.format( "Prosimo, da ne vna拧ate ve膷 kot {0} znakov." ),
	minlength: $.validator.format( "Prosimo, vnesite vsaj {0} znakov." ),
	rangelength: $.validator.format( "Prosimo, vnesite od {0} do {1} znakov." ),
	range: $.validator.format( "Prosimo, vnesite vrednost med {0} in {1}." ),
	max: $.validator.format( "Prosimo, vnesite vrednost manj拧o ali enako {0}." ),
	min: $.validator.format( "Prosimo, vnesite vrednost ve膷jo ali enako {0}." )
} );
return $;
}));