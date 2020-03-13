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
 * Locale: KK (Kazakh; 覜邪蟹邪覜 褌褨谢褨)
 */
$.extend( $.validator.messages, {
	required: "袘冶谢 萤褉褨褋褌褨 屑褨薪写械褌褌褨 褌爷褉写械 褌芯谢褌褘褉褘遥褘蟹.",
	remote: "袛冶褉褘褋 屑邪覔褘薪邪 械薪谐褨蟹褍褨遥褨蟹写褨 褋冶褉邪泄屑褘蟹.",
	email: "袧邪覜褌褘 褝谢械泻褌褉芯薪写褘 锌芯褕褌邪遥褘蟹写褘 械薪谐褨蟹褍褨遥褨蟹写褨 褋冶褉邪泄屑褘蟹.",
	url: "袧邪覜褌褘 URL-写褘 械薪谐褨蟹褍褨遥褨蟹写褨 褋冶褉邪泄屑褘蟹.",
	date: "袧邪覜褌褘 URL-写褘 械薪谐褨蟹褍褨遥褨蟹写褨 褋冶褉邪泄屑褘蟹.",
	dateISO: "袧邪覜褌褘 ISO 褎芯褉屑邪褌褘屑械薪 褋訖泄泻械褋 写邪褌邪褋褘薪 械薪谐褨蟹褍褨遥褨蟹写褨 褋冶褉邪泄屑褘蟹.",
	number: "袣爷薪写褨 械薪谐褨蟹褍褨遥褨蟹写褨 褋冶褉邪泄屑褘蟹.",
	digits: "孝械泻 覜邪薪邪 褋邪薪写邪褉写褘 械薪谐褨蟹褍褨遥褨蟹写褨 褋冶褉邪泄屑褘蟹.",
	creditcard: "袧械褋懈械 泻邪褉褌邪褋褘薪褘遥 薪萤屑褨褉褨薪 写冶褉褘褋 械薪谐褨蟹褍褨遥褨蟹写褨 褋冶褉邪泄屑褘蟹.",
	equalTo: "袨褋褘 屑訖薪写褨 覜邪泄褌邪 械薪谐褨蟹褍褨遥褨蟹写褨 褋冶褉邪泄屑褘蟹.",
	extension: "肖邪泄谢写褘遥 泻械遥械泄褌褍褨薪 写冶褉褘褋 褌邪遥写邪遥褘蟹.",
	maxlength: $.validator.format( "野蟹褘薪写褘覔褘 {0} 褋懈屑胁芯谢写邪薪 泻萤褉 斜芯谢屑邪褋褘薪." ),
	minlength: $.validator.format( "野蟹褘薪写褘覔褘 {0} 褋懈屑胁芯谢写邪薪 邪蟹 斜芯谢屑邪褋褘薪." ),
	rangelength: $.validator.format( "野蟹褘薪写褘覔褘 {0}-{1} 写械泄褨薪 屑訖薪 械薪谐褨蟹褍褨遥褨蟹写褨 褋冶褉邪泄屑褘蟹." ),
	range: $.validator.format( "袩芯卸邪谢褍泄褋褌邪, 胁胁械写懈褌械 褔懈褋谢芯 芯褌 {0} 写芯 {1}. - {0} - {1} 褋邪薪褘薪 械薪谐褨蟹褍褨遥褨蟹写褨 褋冶褉邪泄屑褘蟹." ),
	max: $.validator.format( "{0} 邪蟹 薪械屑械褋械 褌械遥 褋邪薪褘薪 械薪谐褨蟹褍褨遥褨写褨 褋冶褉邪泄屑褘蟹." ),
	min: $.validator.format( "{0} 泻萤锌 薪械屑械褋械 褌械遥 褋邪薪褘薪 械薪谐褨蟹褍褨遥褨蟹写褨 褋冶褉邪泄屑褘蟹." )
} );
return $;
}));