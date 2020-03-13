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
 * Locale: EL (Greek; 蔚位位畏谓喂魏维)
 */
$.extend( $.validator.messages, {
	required: "螒蠀蟿蠈 蟿慰 蟺蔚未委慰 蔚委谓伪喂 蠀蟺慰蠂蟻蔚蠅蟿喂魏蠈.",
	remote: "螤伪蟻伪魏伪位蠋 未喂慰蟻胃蠋蟽蟿蔚 伪蠀蟿蠈 蟿慰 蟺蔚未委慰.",
	email: "螤伪蟻伪魏伪位蠋 蔚喂蟽维纬蔚蟿蔚 渭喂伪 苇纬魏蠀蟻畏 未喂蔚蠉胃蠀谓蟽畏 email.",
	url: "螤伪蟻伪魏伪位蠋 蔚喂蟽维纬蔚蟿蔚 苇谓伪 苇纬魏蠀蟻慰 URL.",
	date: "螤伪蟻伪魏伪位蠋 蔚喂蟽维纬蔚蟿蔚 渭喂伪 苇纬魏蠀蟻畏 畏渭蔚蟻慰渭畏谓委伪.",
	dateISO: "螤伪蟻伪魏伪位蠋 蔚喂蟽维纬蔚蟿蔚 渭喂伪 苇纬魏蠀蟻畏 畏渭蔚蟻慰渭畏谓委伪 (ISO).",
	number: "螤伪蟻伪魏伪位蠋 蔚喂蟽维纬蔚蟿蔚 苇谓伪谓 苇纬魏蠀蟻慰 伪蟻喂胃渭蠈.",
	digits: "螤伪蟻伪魏伪位蠋 蔚喂蟽维纬蔚蟿蔚 渭蠈谓慰 伪蟻喂胃渭畏蟿喂魏维 蠄畏蠁委伪.",
	creditcard: "螤伪蟻伪魏伪位蠋 蔚喂蟽维纬蔚蟿蔚 苇谓伪谓 苇纬魏蠀蟻慰 伪蟻喂胃渭蠈 蟺喂蟽蟿蠅蟿喂魏萎蟼 魏维蟻蟿伪蟼.",
	equalTo: "螤伪蟻伪魏伪位蠋 蔚喂蟽维纬蔚蟿蔚 蟿畏谓 委未喂伪 蟿喂渭萎 尉伪谓维.",
	extension: "螤伪蟻伪魏伪位蠋 蔚喂蟽维纬蔚蟿蔚 渭喂伪 蟿喂渭萎 渭蔚 苇纬魏蠀蟻畏 蔚蟺苇魏蟿伪蟽畏 伪蟻蠂蔚委慰蠀.",
	maxlength: $.validator.format( "螤伪蟻伪魏伪位蠋 蔚喂蟽维纬蔚蟿蔚 渭苇蠂蟻喂 魏伪喂 {0} 蠂伪蟻伪魏蟿萎蟻蔚蟼." ),
	minlength: $.validator.format( "螤伪蟻伪魏伪位蠋 蔚喂蟽维纬蔚蟿蔚 蟿慰蠀位维蠂喂蟽蟿慰谓 {0} 蠂伪蟻伪魏蟿萎蟻蔚蟼." ),
	rangelength: $.validator.format( "螤伪蟻伪魏伪位蠋 蔚喂蟽维纬蔚蟿蔚 渭喂伪 蟿喂渭萎 渭蔚 渭萎魏慰蟼 渭蔚蟿伪尉蠉 {0} 魏伪喂 {1} 蠂伪蟻伪魏蟿萎蟻蠅谓." ),
	range: $.validator.format( "螤伪蟻伪魏伪位蠋 蔚喂蟽维纬蔚蟿蔚 渭喂伪 蟿喂渭萎 渭蔚蟿伪尉蠉 {0} 魏伪喂 {1}." ),
	max: $.validator.format( "螤伪蟻伪魏伪位蠋 蔚喂蟽维纬蔚蟿蔚 渭喂伪 蟿喂渭萎 渭喂魏蟻蠈蟿蔚蟻畏 萎 委蟽畏 蟿慰蠀 {0}." ),
	min: $.validator.format( "螤伪蟻伪魏伪位蠋 蔚喂蟽维纬蔚蟿蔚 渭喂伪 蟿喂渭萎 渭蔚纬伪位蠉蟿蔚蟻畏 萎 委蟽畏 蟿慰蠀 {0}." )
} );
return $;
}));