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
 * Locale: TH (Thai; 喙勦笚喔�)
 */
$.extend( $.validator.messages, {
	required: "喙傕笡喔｀笖喔｀赴喔氞父",
	remote: "喙傕笡喔｀笖喙佮竵喙夃箘喔傕箖喔箟喔栢腹喔佮笗喙夃腑喔�",
	email: "喙傕笡喔｀笖喔｀赴喔氞父喔椸傅喙堗腑喔⑧腹喙堗腑喔掂箑喔∴弗喙屶笚喔掂箞喔栢腹喔佮笗喙夃腑喔�",
	url: "喙傕笡喔｀笖喔｀赴喔氞父 URL 喔椸傅喙堗笘喔灌竵喔曕箟喔竾",
	date: "喙傕笡喔｀笖喔｀赴喔氞父喔о副喔權笚喔掂箞 喔椸傅喙堗笘喔灌竵喔曕箟喔竾",
	dateISO: "喙傕笡喔｀笖喔｀赴喔氞父喔о副喔權笚喔掂箞 喔椸傅喙堗笘喔灌竵喔曕箟喔竾 (喔｀赴喔氞笟 ISO).",
	number: "喙傕笡喔｀笖喔｀赴喔氞父喔椸辅喔權复喔⑧浮喔椸傅喙堗笘喔灌竵喔曕箟喔竾",
	digits: "喙傕笡喔｀笖喔｀赴喔氞父喔堗赋喔權抚喔權箑喔曕箛喔∴笚喔掂箞喔栢腹喔佮笗喙夃腑喔�",
	creditcard: "喙傕笡喔｀笖喔｀赴喔氞父喔｀斧喔编釜喔氞副喔曕福喙�喔勦福喔斷复喔曕笚喔掂箞喔栢腹喔佮笗喙夃腑喔�",
	equalTo: "喙傕笡喔｀笖喔｀赴喔氞父喔勦箞喔侧箑喔斷复喔∴腑喔掂竵喔勦福喔编箟喔�",
	extension: "喙傕笡喔｀笖喔｀赴喔氞父喔勦箞喔侧笚喔掂箞喔∴傅喔箞喔о笝喔傕涪喔侧涪喔椸傅喙堗笘喔灌竵喔曕箟喔竾",
	maxlength: $.validator.format( "喙傕笡喔｀笖喔涪喙堗覆喔｀赴喔氞父喔勦箞喔侧笚喔掂箞喔⑧覆喔о竵喔о箞喔� {0} 喔副喔佮競喔｀赴" ),
	minlength: $.validator.format( "喙傕笡喔｀笖喔涪喙堗覆喔｀赴喔氞父喔勦箞喔侧笚喔掂箞喔副喙夃笝喔佮抚喙堗覆 {0} 喔副喔佮競喔｀赴" ),
	rangelength: $.validator.format( "喙傕笡喔｀笖喔涪喙堗覆喔｀赴喔氞父喔勦箞喔侧竸喔о覆喔∴涪喔侧抚喔｀赴喔抚喙堗覆喔� {0} 喔栢付喔� {1} 喔副喔佮競喔｀赴" ),
	range: $.validator.format( "喙傕笡喔｀笖喔｀赴喔氞父喔勦箞喔侧福喔班斧喔о箞喔侧竾 {0} 喙佮弗喔� {1}" ),
	max: $.validator.format( "喙傕笡喔｀笖喔｀赴喔氞父喔勦箞喔侧笝喙夃腑喔⑧竵喔о箞喔侧斧喔｀阜喔箑喔椸箞喔侧竵喔编笟 {0}" ),
	min: $.validator.format( "喙傕笡喔｀笖喔｀赴喔氞父喔勦箞喔侧浮喔侧竵喔佮抚喙堗覆喔福喔粪腑喙�喔椸箞喔侧竵喔编笟 {0}" )
} );
return $;
}));