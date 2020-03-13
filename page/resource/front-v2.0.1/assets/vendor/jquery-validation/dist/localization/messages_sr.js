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
 * Locale: SR (Serbian; 褋褉锌褋泻懈 褬械蟹懈泻)
 */
$.extend( $.validator.messages, {
	required: "袩芯褭械 褬械 芯斜邪胁械蟹薪芯.",
	remote: "小褉械写懈褌械 芯胁芯 锌芯褭械.",
	email: "校薪械褋懈褌械 懈褋锌褉邪胁薪褍 懈-屑械褬谢 邪写褉械褋褍.",
	url: "校薪械褋懈褌械 懈褋锌褉邪胁邪薪 URL.",
	date: "校薪械褋懈褌械 懈褋锌褉邪胁邪薪 写邪褌褍屑.",
	dateISO: "校薪械褋懈褌械 懈褋锌褉邪胁邪薪 写邪褌褍屑 (ISO).",
	number: "校薪械褋懈褌械 懈褋锌褉邪胁邪薪 斜褉芯褬.",
	digits: "校薪械褋懈褌械 褋邪屑芯 褑懈褎械.",
	creditcard: "校薪械褋懈褌械 懈褋锌褉邪胁邪薪 斜褉芯褬 泻褉械写懈褌薪械 泻邪褉褌懈褑械.",
	equalTo: "校薪械褋懈褌械 懈褋褌褍 胁褉械写薪芯褋褌 锌芯薪芯胁芯.",
	extension: "校薪械褋懈褌械 胁褉械写薪芯褋褌 褋邪 芯写谐芯胁邪褉邪褬褍褯芯屑 械泻褋褌械薪蟹懈褬芯屑.",
	maxlength: $.validator.format( "校薪械褋懈褌械 屑邪褮械 芯写 {0} 泻邪褉邪泻褌械褉邪." ),
	minlength: $.validator.format( "校薪械褋懈褌械 斜邪褉械屑 {0} 泻邪褉邪泻褌械褉邪." ),
	rangelength: $.validator.format( "校薪械褋懈褌械 胁褉械写薪芯褋褌 写褍谐邪褔泻褍 懈蟹屑械褣褍 {0} 懈 {1} 泻邪褉邪泻褌械褉邪." ),
	range: $.validator.format( "校薪械褋懈褌械 胁褉械写薪芯褋褌 懈蟹屑械褣褍 {0} 懈 {1}." ),
	max: $.validator.format( "校薪械褋懈褌械 胁褉械写薪芯褋褌 屑邪褮褍 懈谢懈 褬械写薪邪泻褍 {0}." ),
	min: $.validator.format( "校薪械褋懈褌械 胁褉械写薪芯褋褌 胁械褯褍 懈谢懈 褬械写薪邪泻褍 {0}." )
} );
return $;
}));