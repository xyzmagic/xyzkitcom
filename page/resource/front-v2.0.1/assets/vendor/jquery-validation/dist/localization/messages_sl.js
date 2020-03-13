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
 * Language: SL (Slovenian; slovenski jezik)
 */
$.extend( $.validator.messages, {
	required: "To polje je obvezno.",
	remote: "Prosimo popravite to polje.",
	email: "Prosimo vnesite veljaven email naslov.",
	url: "Prosimo vnesite veljaven URL naslov.",
	date: "Prosimo vnesite veljaven datum.",
	dateISO: "Prosimo vnesite veljaven ISO datum.",
	number: "Prosimo vnesite veljavno 拧tevilo.",
	digits: "Prosimo vnesite samo 拧tevila.",
	creditcard: "Prosimo vnesite veljavno 拧tevilko kreditne kartice.",
	equalTo: "Prosimo ponovno vnesite vrednost.",
	extension: "Prosimo vnesite vrednost z veljavno kon膷nico.",
	maxlength: $.validator.format( "Prosimo vnesite najve膷 {0} znakov." ),
	minlength: $.validator.format( "Prosimo vnesite najmanj {0} znakov." ),
	rangelength: $.validator.format( "Prosimo vnesite najmanj {0} in najve膷 {1} znakov." ),
	range: $.validator.format( "Prosimo vnesite vrednost med {0} in {1}." ),
	max: $.validator.format( "Prosimo vnesite vrednost manj拧e ali enako {0}." ),
	min: $.validator.format( "Prosimo vnesite vrednost ve膷je ali enako {0}." )
} );
return $;
}));