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
 * Locale: LT (Lithuanian; lietuvi懦 kalba)
 */
$.extend( $.validator.messages, {
	required: "艩is laukas yra privalomas.",
	remote: "Pra拧au pataisyti 拧寞 lauk膮.",
	email: "Pra拧au 寞vesti teising膮 elektroninio pa拧to adres膮.",
	url: "Pra拧au 寞vesti teising膮 URL.",
	date: "Pra拧au 寞vesti teising膮 dat膮.",
	dateISO: "Pra拧au 寞vesti teising膮 dat膮 (ISO).",
	number: "Pra拧au 寞vesti teising膮 skai膷i懦.",
	digits: "Pra拧au naudoti tik skaitmenis.",
	creditcard: "Pra拧au 寞vesti teising膮 kreditin臈s kortel臈s numer寞.",
	equalTo: "Pra拧au 寞vest寞 t膮 pa膷i膮 reik拧m臋 dar kart膮.",
	extension: "Pra拧au 寞vesti reik拧m臋 su teisingu pl臈tiniu.",
	maxlength: $.validator.format( "Pra拧au 寞vesti ne daugiau kaip {0} simboli懦." ),
	minlength: $.validator.format( "Pra拧au 寞vesti bent {0} simbolius." ),
	rangelength: $.validator.format( "Pra拧au 寞vesti reik拧mes, kuri懦 ilgis nuo {0} iki {1} simboli懦." ),
	range: $.validator.format( "Pra拧au 寞vesti reik拧m臋 intervale nuo {0} iki {1}." ),
	max: $.validator.format( "Pra拧au 寞vesti reik拧m臋 ma啪esn臋 arba lygi膮 {0}." ),
	min: $.validator.format( "Pra拧au 寞vesti reik拧m臋 didesn臋 arba lygi膮 {0}." )
} );
return $;
}));