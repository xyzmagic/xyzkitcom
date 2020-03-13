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
 * Locale: AR (Arabic; 丕賱毓乇亘賷丞)
 */
$.extend( $.validator.messages, {
	required: "賴匕丕 丕賱丨賯賱 廿賱夭丕賲賷",
	remote: "賷乇噩賶 鬲氐丨賷丨 賴匕丕 丕賱丨賯賱 賱賱賲鬲丕亘毓丞",
	email: "乇噩丕亍 廿丿禺丕賱 毓賳賵丕賳 亘乇賷丿 廿賱賰鬲乇賵賳賷 氐丨賷丨",
	url: "乇噩丕亍 廿丿禺丕賱 毓賳賵丕賳 賲賵賯毓 廿賱賰鬲乇賵賳賷 氐丨賷丨",
	date: "乇噩丕亍 廿丿禺丕賱 鬲丕乇賷禺 氐丨賷丨",
	dateISO: "乇噩丕亍 廿丿禺丕賱 鬲丕乇賷禺 氐丨賷丨 (ISO)",
	number: "乇噩丕亍 廿丿禺丕賱 毓丿丿 亘胤乇賷賯丞 氐丨賷丨丞",
	digits: "乇噩丕亍 廿丿禺丕賱 兀乇賯丕賲 賮賯胤",
	creditcard: "乇噩丕亍 廿丿禺丕賱 乇賯賲 亘胤丕賯丞 丕卅鬲賲丕賳 氐丨賷丨",
	equalTo: "乇噩丕亍 廿丿禺丕賱 賳賮爻 丕賱賯賷賲丞",
	extension: "乇噩丕亍 廿丿禺丕賱 賲賱賮 亘丕賲鬲丿丕丿 賲賵丕賮賯 毓賱賷賴",
	maxlength: $.validator.format( "丕賱丨丿 丕賱兀賯氐賶 賱毓丿丿 丕賱丨乇賵賮 賴賵 {0}" ),
	minlength: $.validator.format( "丕賱丨丿 丕賱兀丿賳賶 賱毓丿丿 丕賱丨乇賵賮 賴賵 {0}" ),
	rangelength: $.validator.format( "毓丿丿 丕賱丨乇賵賮 賷噩亘 兀賳 賷賰賵賳 亘賷賳 {0} 賵 {1}" ),
	range: $.validator.format( "乇噩丕亍 廿丿禺丕賱 毓丿丿 賯賷賲鬲賴 亘賷賳 {0} 賵 {1}" ),
	max: $.validator.format( "乇噩丕亍 廿丿禺丕賱 毓丿丿 兀賯賱 賲賳 兀賵 賷爻丕賵賷 {0}" ),
	min: $.validator.format( "乇噩丕亍 廿丿禺丕賱 毓丿丿 兀賰亘乇 賲賳 兀賵 賷爻丕賵賷 {0}" )
} );
return $;
}));