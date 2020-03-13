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
 * Locale: JA (Japanese; 鏃ユ湰瑾�)
 */
$.extend( $.validator.messages, {
	required: "銇撱伄銉曘偅銉笺儷銉夈伅蹇呴爤銇с仚銆�",
	remote: "銇撱伄銉曘偅銉笺儷銉夈倰淇銇椼仸銇忋仩銇曘亜銆�",
	email: "鏈夊姽銇狤銉°兗銉偄銉夈儸銈广倰鍏ュ姏銇椼仸銇忋仩銇曘亜銆�",
	url: "鏈夊姽銇猆RL銈掑叆鍔涖仐銇︺亸銇犮仌銇勩��",
	date: "鏈夊姽銇棩浠樸倰鍏ュ姏銇椼仸銇忋仩銇曘亜銆�",
	dateISO: "鏈夊姽銇棩浠橈紙ISO锛夈倰鍏ュ姏銇椼仸銇忋仩銇曘亜銆�",
	number: "鏈夊姽銇暟瀛椼倰鍏ュ姏銇椼仸銇忋仩銇曘亜銆�",
	digits: "鏁板瓧銇伩銈掑叆鍔涖仐銇︺亸銇犮仌銇勩��",
	creditcard: "鏈夊姽銇偗銉偢銉冦儓銈兗銉夌暘鍙枫倰鍏ュ姏銇椼仸銇忋仩銇曘亜銆�",
	equalTo: "鍚屻仒鍊ゃ倰銈傘亞涓�搴﹀叆鍔涖仐銇︺亸銇犮仌銇勩��",
	extension: "鏈夊姽銇嫛寮靛瓙銈掑惈銈�鍊ゃ倰鍏ュ姏銇椼仸銇忋仩銇曘亜銆�",
	maxlength: $.validator.format( "{0} 鏂囧瓧浠ュ唴銇у叆鍔涖仐銇︺亸銇犮仌銇勩��" ),
	minlength: $.validator.format( "{0} 鏂囧瓧浠ヤ笂銇у叆鍔涖仐銇︺亸銇犮仌銇勩��" ),
	rangelength: $.validator.format( "{0} 鏂囧瓧銇嬨倝 {1} 鏂囧瓧銇俱仹銇�ゃ倰鍏ュ姏銇椼仸銇忋仩銇曘亜銆�" ),
	range: $.validator.format( "{0} 銇嬨倝 {1} 銇俱仹銇�ゃ倰鍏ュ姏銇椼仸銇忋仩銇曘亜銆�" ),
	step: $.validator.format( "{0} 銇�嶆暟銈掑叆鍔涖仐銇︺亸銇犮仌銇勩��" ),
	max: $.validator.format( "{0} 浠ヤ笅銇�ゃ倰鍏ュ姏銇椼仸銇忋仩銇曘亜銆�" ),
	min: $.validator.format( "{0} 浠ヤ笂銇�ゃ倰鍏ュ姏銇椼仸銇忋仩銇曘亜銆�" )
} );
return $;
}));