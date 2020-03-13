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
 * Locale: HY_AM (Armenian; 瞻铡盏榨謤榨斩 宅榨咋崭謧)
 */
$.extend( $.validator.messages, {
	required: "諍铡謤湛铡栅斋謤 宅謤铡謥沾铡斩 栅铡辗湛",
	remote: "諉榨謤沾崭謧债榨謩 粘斋辗湛 铡謤摘榨謩炸",
	email: "諉榨謤沾崭謧债榨謩 站铡站榨謤 乍宅榨寨湛謤崭斩铡盏斋斩 謨崭战湛斋 瞻铡战謥榨",
	url: "諉榨謤沾崭謧债榨謩 站铡站榨謤 URL",
	date: "諉榨謤沾崭謧债榨謩 站铡站榨謤 铡沾战铡诈斋站",
	dateISO: "諉榨謤沾崭謧债榨謩 ISO 謫崭謤沾铡湛崭站 站铡站榨謤 铡沾战铡诈斋站謮",
	number: "諉榨謤沾崭謧债榨謩 诈斋站",
	digits: "諉榨謤沾崭謧债榨謩 沾斋铡盏斩 诈站榨謤",
	creditcard: "諉榨謤沾崭謧债榨謩 粘斋辗湛 闸铡斩寨铡盏斋斩 謩铡謤湛斋 瞻铡沾铡謤",
	equalTo: "諉榨謤沾崭謧债榨謩 沾斋謬斩崭謧斩 铡謤摘榨謩炸 謬战 沾榨寨 铡斩眨铡沾",
	extension: "愿斩湛謤榨謩 粘斋辗湛 炸斩栅宅铡斩崭謧沾崭站 謫铡盏宅",
	maxlength: $.validator.format( "諉榨謤沾崭謧债榨謩 崭展 铡站榨宅 謩铡斩 {0} 斩斋辗" ),
	minlength: $.validator.format( "諉榨謤沾崭謧债榨謩 崭展 蘸铡寨铡战 謩铡斩 {0} 斩斋辗" ),
	rangelength: $.validator.format( "諉榨謤沾崭謧债榨謩 {0}謯斋謥 {1} 榨謤寨铡謤崭謧诈盏铡沾闸 铡謤摘榨謩" ),
	range: $.validator.format( "諉榨謤沾崭謧债榨謩 诈斋站 {0}謯斋謥 {1} 沾斋栈铡寨铡盏謩崭謧沾" ),
	max: $.validator.format( "諉榨謤沾崭謧债榨謩 诈斋站, 崭謤炸 謨崭謩謤 寨铡沾 瞻铡站铡战铡謤 乍聽{0}謯斋斩" ),
	min: $.validator.format( "諉榨謤沾崭謧债榨謩 诈斋站, 崭謤炸 沾榨债 寨铡沾 瞻铡站铡战铡謤 乍 {0}謯斋斩" )
} );
return $;
}));