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
 * Locale: FA (Persian; 賮丕乇爻蹖)
 */
$.extend( $.validator.messages, {
	required: "鬲讴賲蹖賱 丕蹖賳 賮蹖賱丿 丕噩亘丕乇蹖 丕爻鬲.",
	remote: "賱胤賮丕 丕蹖賳 賮蹖賱丿 乇丕 鬲氐丨蹖丨 讴賳蹖丿.",
	email: ".賱胤賮丕 蹖讴 丕蹖賲蹖賱 氐丨蹖丨 賵丕乇丿 讴賳蹖丿",
	url: "賱胤賮丕 丌丿乇爻 氐丨蹖丨 賵丕乇丿 讴賳蹖丿.",
	date: "賱胤賮丕 蹖讴 鬲丕乇蹖禺 氐丨蹖丨 賵丕乇丿 讴賳蹖丿",
	dateFA: "賱胤賮丕 蹖讴 鬲丕乇蹖禺 氐丨蹖丨 賵丕乇丿 讴賳蹖丿",
	dateISO: "賱胤賮丕 鬲丕乇蹖禺 氐丨蹖丨 賵丕乇丿 讴賳蹖丿 (ISO).",
	number: "賱胤賮丕 毓丿丿 氐丨蹖丨 賵丕乇丿 讴賳蹖丿.",
	digits: "賱胤賮丕 鬲賳賴丕 乇賯賲 賵丕乇丿 讴賳蹖丿",
	creditcard: "賱胤賮丕 讴乇蹖丿蹖鬲 讴丕乇鬲 氐丨蹖丨 賵丕乇丿 讴賳蹖丿.",
	equalTo: "賱胤賮丕 賲賯丿丕乇 亘乇丕亘乇蹖 賵丕乇丿 讴賳蹖丿",
	extension: "賱胤賮丕 賲賯丿丕乇蹖 賵丕乇丿 讴賳蹖丿 讴賴 ",
	maxlength: $.validator.format( "賱胤賮丕 亘蹖卮鬲乇 丕夭 {0} 丨乇賮 賵丕乇丿 賳讴賳蹖丿." ),
	minlength: $.validator.format( "賱胤賮丕 讴賲鬲乇 丕夭 {0} 丨乇賮 賵丕乇丿 賳讴賳蹖丿." ),
	rangelength: $.validator.format( "賱胤賮丕 賲賯丿丕乇蹖 亘蹖賳 {0} 鬲丕 {1} 丨乇賮 賵丕乇丿 讴賳蹖丿." ),
	range: $.validator.format( "賱胤賮丕 賲賯丿丕乇蹖 亘蹖賳 {0} 鬲丕 {1} 丨乇賮 賵丕乇丿 讴賳蹖丿." ),
	max: $.validator.format( "賱胤賮丕 賲賯丿丕乇蹖 讴賲鬲乇 丕夭 {0} 賵丕乇丿 讴賳蹖丿." ),
	min: $.validator.format( "賱胤賮丕 賲賯丿丕乇蹖 亘蹖卮鬲乇 丕夭 {0} 賵丕乇丿 讴賳蹖丿." ),
	minWords: $.validator.format( "賱胤賮丕 丨丿丕賯賱 {0} 讴賱賲賴 賵丕乇丿 讴賳蹖丿." ),
	maxWords: $.validator.format( "賱胤賮丕 丨丿丕讴孬乇 {0} 讴賱賲賴 賵丕乇丿 讴賳蹖丿." )
} );
return $;
}));