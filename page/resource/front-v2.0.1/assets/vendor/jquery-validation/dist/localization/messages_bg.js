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
 * Locale: BG (Bulgarian; 斜褗谢谐邪褉褋泻懈 械蟹懈泻)
 */
$.extend( $.validator.messages, {
	required: "袩芯谢械褌芯 械 蟹邪写褗谢卸懈褌械谢薪芯.",
	remote: "袦芯谢褟, 胁褗胁械写械褌械 锌褉邪胁懈谢薪邪褌邪 褋褌芯泄薪芯褋褌.",
	email: "袦芯谢褟, 胁褗胁械写械褌械 胁邪谢懈写械薪 email.",
	url: "袦芯谢褟, 胁褗胁械写械褌械 胁邪谢懈写薪芯 URL.",
	date: "袦芯谢褟, 胁褗胁械写械褌械 胁邪谢懈写薪邪 写邪褌邪.",
	dateISO: "袦芯谢褟, 胁褗胁械写械褌械 胁邪谢懈写薪邪 写邪褌邪 (ISO).",
	number: "袦芯谢褟, 胁褗胁械写械褌械 胁邪谢懈写械薪 薪芯屑械褉.",
	digits: "袦芯谢褟, 胁褗胁械写械褌械 褋邪屑芯 褑懈褎褉懈.",
	creditcard: "袦芯谢褟, 胁褗胁械写械褌械 胁邪谢懈写械薪 薪芯屑械褉 薪邪 泻褉械写懈褌薪邪 泻邪褉褌邪.",
	equalTo: "袦芯谢褟, 胁褗胁械写械褌械 褋褗褖邪褌邪 褋褌芯泄薪芯褋褌 芯褌薪芯胁芯.",
	extension: "袦芯谢褟, 胁褗胁械写械褌械 褋褌芯泄薪芯褋褌 褋 胁邪谢懈写薪芯 褉邪蟹褕懈褉械薪懈械.",
	maxlength: $.validator.format( "袦芯谢褟, 胁褗胁械写械褌械 锌芯胁械褔械 芯褌 {0} 褋懈屑胁芯谢邪." ),
	minlength: $.validator.format( "袦芯谢褟, 胁褗胁械写械褌械 锌芯薪械 {0} 褋懈屑胁芯谢邪." ),
	rangelength: $.validator.format( "袦芯谢褟, 胁褗胁械写械褌械 褋褌芯泄薪芯褋褌 褋 写褗谢卸懈薪邪 屑械卸写褍 {0} 懈 {1} 褋懈屑胁芯谢邪." ),
	range: $.validator.format( "袦芯谢褟, 胁褗胁械写械褌械 褋褌芯泄薪芯褋褌 屑械卸写褍 {0} 懈 {1}." ),
	max: $.validator.format( "袦芯谢褟, 胁褗胁械写械褌械 褋褌芯泄薪芯褋褌 锌芯-屑邪谢泻邪 懈谢懈 褉邪胁薪邪 薪邪 {0}." ),
	min: $.validator.format( "袦芯谢褟, 胁褗胁械写械褌械 褋褌芯泄薪芯褋褌 锌芯-谐芯谢褟屑邪 懈谢懈 褉邪胁薪邪 薪邪 {0}." )
} );
return $;
}));