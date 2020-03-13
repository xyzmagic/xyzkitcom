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
 * Locale: UK (Ukrainian; 褍泻褉邪褩薪褋褜泻邪 屑芯胁邪)
 */
$.extend( $.validator.messages, {
	required: "笑械 锌芯谢械 薪械芯斜褏褨写薪芯 蟹邪锌芯胁薪懈褌懈.",
	remote: "袘褍写褜 谢邪褋泻邪, 胁胁械写褨褌褜 锌褉邪胁懈谢褜薪械 蟹薪邪褔械薪薪褟.",
	email: "袘褍写褜 谢邪褋泻邪, 胁胁械写褨褌褜 泻芯褉械泻褌薪褍 邪写褉械褋褍 械谢械泻褌褉芯薪薪芯褩 锌芯褕褌懈.",
	url: "袘褍写褜 谢邪褋泻邪, 胁胁械写褨褌褜 泻芯褉械泻褌薪懈泄 URL.",
	date: "袘褍写褜 谢邪褋泻邪, 胁胁械写褨褌褜 泻芯褉械泻褌薪褍 写邪褌褍.",
	dateISO: "袘褍写褜 谢邪褋泻邪, 胁胁械写褨褌褜 泻芯褉械泻褌薪褍 写邪褌褍 褍 褎芯褉屑邪褌褨 ISO.",
	number: "袘褍写褜 谢邪褋泻邪, 胁胁械写褨褌褜 褔懈褋谢芯.",
	digits: "袙胁芯写懈褌械 锌芯褌褉褨斜薪芯 谢懈褕械 褑懈褎褉懈.",
	creditcard: "袘褍写褜 谢邪褋泻邪, 胁胁械写褨褌褜 锌褉邪胁懈谢褜薪懈泄 薪芯屑械褉 泻褉械写懈褌薪芯褩 泻邪褉褌懈.",
	equalTo: "袘褍写褜 谢邪褋泻邪, 胁胁械写褨褌褜 褌邪泻械 卸 蟹薪邪褔械薪薪褟 褖械 褉邪蟹.",
	extension: "袘褍写褜 谢邪褋泻邪, 胁懈斜械褉褨褌褜 褎邪泄谢 蟹 锌褉邪胁懈谢褜薪懈屑 褉芯蟹褕懈褉械薪薪褟屑.",
	maxlength: $.validator.format( "袘褍写褜 谢邪褋泻邪, 胁胁械写褨褌褜 薪械 斜褨谢褜褕械 {0} 褋懈屑胁芯谢褨胁." ),
	minlength: $.validator.format( "袘褍写褜 谢邪褋泻邪, 胁胁械写褨褌褜 薪械 屑械薪褕械 {0} 褋懈屑胁芯谢褨胁." ),
	rangelength: $.validator.format( "袘褍写褜 谢邪褋泻邪, 胁胁械写褨褌褜 蟹薪邪褔械薪薪褟 写芯胁卸懈薪芯褞 胁褨写 {0} 写芯 {1} 褋懈屑胁芯谢褨胁." ),
	range: $.validator.format( "袘褍写褜 谢邪褋泻邪, 胁胁械写褨褌褜 褔懈褋谢芯 胁褨写 {0} 写芯 {1}." ),
	max: $.validator.format( "袘褍写褜 谢邪褋泻邪, 胁胁械写褨褌褜 褔懈褋谢芯, 屑械薪褕械 邪斜芯 褉褨胁薪芯 {0}." ),
	min: $.validator.format( "袘褍写褜 谢邪褋泻邪, 胁胁械写褨褌褜 褔懈褋谢芯, 斜褨谢褜褕械 邪斜芯 褉褨胁薪芯 {0}." )
} );
return $;
}));