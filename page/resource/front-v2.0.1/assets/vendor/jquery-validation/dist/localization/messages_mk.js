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
 * Locale: MK (Macedonian; 屑邪泻械写芯薪褋泻懈 褬邪蟹懈泻)
 */
$.extend( $.validator.messages, {
	required: "袩芯谢械褌芯 械 蟹邪写芯谢卸懈褌械谢薪芯.",
	remote: "袩芯锌褉邪胁械褌械 谐芯 芯胁邪 锌芯谢械",
	email: "袙薪械褋械褌械 锌褉邪胁懈谢薪邪 e-mail 邪写褉械褋邪",
	url: "袙薪械褋械褌械 锌褉邪胁懈谢械薪 URL.",
	date: "袙薪械褋械褌械 锌褉邪胁懈谢械薪 写邪褌褍屑",
	dateISO: "袙薪械褋械褌械 锌褉邪胁懈谢械薪 写邪褌褍屑 (ISO).",
	number: "袙薪械褋械褌械 锌褉邪胁懈谢械薪 斜褉芯褬.",
	digits: "袙薪械褋械褌械 褋邪屑芯 斜褉芯褬泻懈.",
	creditcard: "袙薪械褋械褌械 锌褉邪胁懈谢械薪 斜褉芯褬 薪邪 泻褉械写懈褌薪邪褌邪 泻邪褉褌懈褔泻邪.",
	equalTo: "袙薪械褋械褌械 褬邪 懈褋褌邪褌邪 胁褉械写薪芯褋褌 锌芯胁褌芯褉薪芯.",
	extension: "袙薪械褋械褌械 胁褉械写薪芯褋褌 褋芯 褋芯芯写胁械褌薪邪 械泻褋褌械薪蟹懈褬邪.",
	maxlength: $.validator.format( "袙薪械褋械褌械 屑邪泻褋懈屑邪谢薪芯 {0} 蟹薪邪褑懈." ),
	minlength: $.validator.format( "袙薪械褋械褌械 斜邪褉械屑 {0} 蟹薪邪褑懈." ),
	rangelength: $.validator.format( "袙薪械褋械褌械 胁褉械写薪芯褋褌 褋芯 写芯谢卸懈薪邪 锌芯屑械褤褍 {0} 懈 {1} 蟹薪邪褑懈." ),
	range: $.validator.format( "袙薪械褋械褌械 胁褉械写薪芯褋褌 锌芯屑械褤褍 {0} 懈 {1}." ),
	max: $.validator.format( "袙薪械褋械褌械 胁褉械写薪芯褋褌 锌芯屑邪谢邪 懈谢懈 械写薪邪泻胁邪 薪邪 {0}." ),
	min: $.validator.format( "袙薪械褋械褌械 胁褉械写薪芯褋褌 锌芯谐芯谢械屑邪 懈谢懈 械写薪邪泻胁邪 薪邪 {0}" )
} );
return $;
}));