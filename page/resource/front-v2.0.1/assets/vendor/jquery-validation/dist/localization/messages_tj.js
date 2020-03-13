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
 * Locale: TJ (Tajikistan; 袟邪斜芯薪懈 褌芯曳懈泻樱)
 */
$.extend( $.validator.messages, {
	required: "袙芯褉懈写 泻邪褉写邪薪懈 懈薪 褎懈谢写 屑邪曳斜褍褉懈 邪褋褌.",
	remote: "袠谢褌懈屑芯褋, 屑邪褗谢褍屑芯褌懈 褋邪页械页 胁芯褉懈写 泻褍薪械写.",
	email: "袠谢褌懈屑芯褋, 锌芯褔褌邪懈 褝谢械泻褌褉芯薪懈懈 褋邪页械页 胁芯褉懈写 泻褍薪械写.",
	url: "袠谢褌懈屑芯褋, URL 邪写褉械褋懈 褋邪页械页 胁芯褉懈写 泻褍薪械写.",
	date: "袠谢褌懈屑芯褋, 褌邪褗褉懈褏懈 褋邪页械页 胁芯褉懈写 泻褍薪械写.",
	dateISO: "袠谢褌懈屑芯褋, 褌邪褗褉懈褏懈 褋邪页械页懈 (ISO)樱 胁芯褉懈写 泻褍薪械写.",
	number: "袠谢褌懈屑芯褋, 褉邪覜邪屑页芯懈 褋邪页械页 胁芯褉懈写 泻褍薪械写.",
	digits: "袠谢褌懈屑芯褋, 褌邪薪页芯 褉邪覜邪屑 胁芯褉懈写 泻褍薪械写.",
	creditcard: "袠谢褌懈屑芯褋, 泻褉械写懈褌 泻邪褉写懈 褋邪页械页 胁芯褉懈写 泻褍薪械写.",
	equalTo: "袠谢褌懈屑芯褋, 屑懈覜写芯褉懈 斜邪褉芯斜邪褉 胁芯褉懈写 泻褍薪械写.",
	extension: "袠谢褌懈屑芯褋, 覜芯褎懈褟懈 褎邪泄谢褉芯 写褍褉褍褋褌 懈薪褌懈褏芯斜 泻褍薪械写",
	maxlength: $.validator.format( "袠谢褌懈屑芯褋, 斜械褕褌邪褉 邪蟹 {0} 褉邪屑蟹 胁芯褉懈写 薪邪泻褍薪械写." ),
	minlength: $.validator.format( "袠谢褌懈屑芯褋, 泻邪屑褌邪褉 邪蟹 {0} 褉邪屑蟹 胁芯褉懈写 薪邪泻褍薪械写." ),
	rangelength: $.validator.format( "袠谢褌懈屑芯褋, 泻邪屑褌邪褉 邪蟹 {0} 胁邪 蟹懈褢写邪 邪蟹 {1} 褉邪屑蟹 胁芯褉懈写 泻褍薪械写." ),
	range: $.validator.format( "袠谢褌懈屑芯褋, 邪蟹 {0} 褌芯 {1} 褉邪覜邪屑 蟹懈褢写 胁芯褉懈写 泻褍薪械写." ),
	max: $.validator.format( "袠谢褌懈屑芯褋, 斜械褕褌邪褉 邪蟹 {0} 褉邪覜邪屑 胁芯褉懈写 薪邪泻褍薪械写." ),
	min: $.validator.format( "袠谢褌懈屑芯褋, 泻邪屑褌邪褉 邪蟹 {0} 褉邪覜邪屑 胁芯褉懈写 薪邪泻褍薪械写." )
} );
return $;
}));