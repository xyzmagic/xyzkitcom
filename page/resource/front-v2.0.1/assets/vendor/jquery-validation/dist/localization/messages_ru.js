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
 * Locale: RU (Russian; 褉褍褋褋泻懈泄 褟蟹褘泻)
 */
$.extend( $.validator.messages, {
	required: "协褌芯 锌芯谢械 薪械芯斜褏芯写懈屑芯 蟹邪锌芯谢薪懈褌褜.",
	remote: "袩芯卸邪谢褍泄褋褌邪, 胁胁械写懈褌械 锌褉邪胁懈谢褜薪芯械 蟹薪邪褔械薪懈械.",
	email: "袩芯卸邪谢褍泄褋褌邪, 胁胁械写懈褌械 泻芯褉褉械泻褌薪褘泄 邪写褉械褋 褝谢械泻褌褉芯薪薪芯泄 锌芯褔褌褘.",
	url: "袩芯卸邪谢褍泄褋褌邪, 胁胁械写懈褌械 泻芯褉褉械泻褌薪褘泄 URL.",
	date: "袩芯卸邪谢褍泄褋褌邪, 胁胁械写懈褌械 泻芯褉褉械泻褌薪褍褞 写邪褌褍.",
	dateISO: "袩芯卸邪谢褍泄褋褌邪, 胁胁械写懈褌械 泻芯褉褉械泻褌薪褍褞 写邪褌褍 胁 褎芯褉屑邪褌械 ISO.",
	number: "袩芯卸邪谢褍泄褋褌邪, 胁胁械写懈褌械 褔懈褋谢芯.",
	digits: "袩芯卸邪谢褍泄褋褌邪, 胁胁芯写懈褌械 褌芯谢褜泻芯 褑懈褎褉褘.",
	creditcard: "袩芯卸邪谢褍泄褋褌邪, 胁胁械写懈褌械 锌褉邪胁懈谢褜薪褘泄 薪芯屑械褉 泻褉械写懈褌薪芯泄 泻邪褉褌褘.",
	equalTo: "袩芯卸邪谢褍泄褋褌邪, 胁胁械写懈褌械 褌邪泻芯械 卸械 蟹薪邪褔械薪懈械 械褖褢 褉邪蟹.",
	extension: "袩芯卸邪谢褍泄褋褌邪, 胁褘斜械褉懈褌械 褎邪泄谢 褋 锌褉邪胁懈谢褜薪褘屑 褉邪褋褕懈褉械薪懈械屑.",
	maxlength: $.validator.format( "袩芯卸邪谢褍泄褋褌邪, 胁胁械写懈褌械 薪械 斜芯谢褜褕械 {0} 褋懈屑胁芯谢芯胁." ),
	minlength: $.validator.format( "袩芯卸邪谢褍泄褋褌邪, 胁胁械写懈褌械 薪械 屑械薪褜褕械 {0} 褋懈屑胁芯谢芯胁." ),
	rangelength: $.validator.format( "袩芯卸邪谢褍泄褋褌邪, 胁胁械写懈褌械 蟹薪邪褔械薪懈械 写谢懈薪芯泄 芯褌 {0} 写芯 {1} 褋懈屑胁芯谢芯胁." ),
	range: $.validator.format( "袩芯卸邪谢褍泄褋褌邪, 胁胁械写懈褌械 褔懈褋谢芯 芯褌 {0} 写芯 {1}." ),
	max: $.validator.format( "袩芯卸邪谢褍泄褋褌邪, 胁胁械写懈褌械 褔懈褋谢芯, 屑械薪褜褕械械 懈谢懈 褉邪胁薪芯械聽{0}." ),
	min: $.validator.format( "袩芯卸邪谢褍泄褋褌邪, 胁胁械写懈褌械 褔懈褋谢芯, 斜芯谢褜褕械械 懈谢懈 褉邪胁薪芯械 {0}." )
} );
return $;
}));