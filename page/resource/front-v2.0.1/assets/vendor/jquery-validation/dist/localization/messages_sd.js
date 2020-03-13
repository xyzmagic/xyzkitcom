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
 * Locale: SD (Sindhi; 爻賳趯賷)
 */
$.extend( $.validator.messages, {
    required: "賴賳賳 噩丕賷賳 噩賷 囟乇賵乇鬲 丌賴賷",
    remote: "賴賳賳 噩丕賷賳 噩賷 囟乇賵乇鬲 丌賴賷",
    email: "賱讴賷賱 丕賷 賲賷賱 睾賱胤 丌賴賷",
    url: "賱讴賷賱 丕賷趭乇賷爻 睾賱胤 丌賴賷",
    date: "賱讴賷賱 鬲丕乇賷禺 睾賱胤 丌賴賷",
    dateISO: "噩賷 賲毓賷丕乇 噩賷 賲胤丕亘賯 賳賴 丌賴賷 (ISO) 賱讴賷賱 鬲丕乇賷禺",
    number: "賱讴賷賱 丕賳诏 氐丨賷丨 賳丕賴賷",
    digits: "乇诔賵 丕賳诏 丿丕禺賱 讵乇賷 爻诏賴噩賷 倏賵",
    creditcard: "賱讴賷賱 讵丕乇趭 賳賲亘乇 氐丨賷丨 賳賴 丌賴賷",
    equalTo: "丿丕禺賱 倏賷賱 趢賷俳 氐丨賷丨 賳賴 丌賴賷",
    extension: "賱讴賷賱 睾賱胤 丌賴賷",
    maxlength: $.validator.format( "賵趯 讴丕賳 賵趯 {0} 噩賷 丿丕禺賱丕 讵乇賷 爻诏賴噩賷 倏賷" ),
    minlength: $.validator.format( "诏賴俳 劬 诏賴俳 {0} 噩賷 丿丕禺賱丕 讵乇诨 囟乇賵乇賷 丌賴賷" ),
    rangelength: $.validator.format( "丿丕禺賱丕 噩賵 {0} 劢 {1}噩賷 賵趩 劬 賴噩诨 囟乇賵乇賷 丌賴賷" ),
    range: $.validator.format( "丿丕禺賱丕 噩賵 {0} 劢 {1}噩賷 賵趩 劬 賴噩诨 囟乇賵乇賷 丌賴賷" ),
    max: $.validator.format( "賵趯 讴丕賳 賵趯 {0} 噩賷 丿丕禺賱丕 讵乇賷 爻诏賴噩賷 倏賷" ),
    min: $.validator.format( "诏賴俳 劬 诏賴俳 {0} 噩賷 丿丕禺賱丕 讵乇诨 囟乇賵乇賷 丌賴賷" )
} );
return $;
}));