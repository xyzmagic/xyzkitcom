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
 * Locale: UR (Urdu; 丕乇丿賵)
 */
$.extend( $.validator.messages, {
	required: "丕賳 賲毓賱賵賲丕鬲 讴丕 丕賳丿乇丕噩 囟乇賵乇蹖 蹃蹝",
	remote: "丕賳 賲毓賱賵賲丕鬲 讴丕 丕賳丿乇丕噩 囟乇賵乇蹖 蹃蹝",
	email: "丿乇噩 讴蹖 蹃賵卅蹖 丕蹖 賲蹖賱 丿乇爻鬲 賳蹃蹖诤 蹃蹝",
	url: "丿乇噩 讴蹖丕 诏蹖丕 倬鬲蹃 丿乇爻鬲 賳蹃蹖诤 蹃蹝",
	date: "丿乇噩 讴蹖 诏卅蹖 鬲丕乇蹖禺 丿乇爻鬲 賳蹃蹖诤 蹃蹝",
	dateISO: "賲毓蹖丕乇 讴蹝 賲胤丕亘賯 賳蹃蹖诤 蹃蹝 (ISO) 丿乇噩 讴蹖 诏卅蹖 鬲丕乇蹖禺",
	number: "丿乇噩 讴蹖蹝诏卅蹝 蹃賳丿爻蹝 丿乇爻鬲 賳蹃蹖诤 蹃蹖诤",
	digits: "氐乇賮 蹃賳丿爻蹝 丕賳丿乇丕噩 讴卅蹝 噩丕爻讴鬲蹝 蹃蹖诤",
	creditcard: "丿乇噩 讴蹖丕 诏蹖丕 讴丕乇趫 賳賲亘乇 丿乇爻鬲 賳蹃蹖诤 蹃蹝",
	equalTo: "丕賳丿乇丕噩 讴丕 賲賵丕夭賳蹃 丿乇爻鬲 賳蹃蹖诤 蹃蹝",
	extension: "丕賳丿乇丕噩 丿乇爻鬲 賳蹃蹖诤 蹃蹝",
	maxlength: $.validator.format( "夭蹖丕丿蹃 爻蹝 夭蹖丕丿蹃 {0} 讴丕 丕賳丿乇丕噩 讴乇 爻讴鬲蹝 蹃蹖诤" ),
	minlength: $.validator.format( "讴賲 爻蹝 讴賲 {0} 讴丕 丕賳丿乇丕噩 讴乇賳丕 囟乇賵乇蹖 蹃蹝" ),
	rangelength: $.validator.format( "丕賳丿乇丕噩 讴丕 {0} 丕賵乇 {1}讴蹝 丿乇賲蹖丕賳 蹃賵賳丕 囟乇賵乇蹖 蹃蹝" ),
	range: $.validator.format( "丕賳丿乇丕噩 讴丕 {0} 丕賵乇 {1} 讴蹝 丿乇賲蹖丕賳 蹃賵賳丕 囟乇賵乇蹖 蹃蹝" ),
	max: $.validator.format( "夭蹖丕丿蹃 爻蹝 夭蹖丕丿蹃 {0} 讴丕 丕賳丿乇丕噩 讴乇 爻讴鬲蹝 蹃蹖诤" ),
	min: $.validator.format( "讴賲 爻蹝 讴賲 {0} 讴丕 丕賳丿乇丕噩 讴乇賳丕 囟乇賵乇蹖 蹃蹝" )
} );
return $;
}));