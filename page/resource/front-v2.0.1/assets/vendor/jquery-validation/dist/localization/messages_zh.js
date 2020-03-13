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
 * Locale: ZH (Chinese, 涓枃 (Zh艒ngw茅n), 姹夎, 婕㈣獮)
 */
$.extend( $.validator.messages, {
	required: "杩欐槸蹇呭～瀛楁",
	remote: "璇蜂慨姝ｆ瀛楁",
	email: "璇疯緭鍏ユ湁鏁堢殑鐢靛瓙閭欢鍦板潃",
	url: "璇疯緭鍏ユ湁鏁堢殑缃戝潃",
	date: "璇疯緭鍏ユ湁鏁堢殑鏃ユ湡",
	dateISO: "璇疯緭鍏ユ湁鏁堢殑鏃ユ湡 (YYYY-MM-DD)",
	number: "璇疯緭鍏ユ湁鏁堢殑鏁板瓧",
	digits: "鍙兘杈撳叆鏁板瓧",
	creditcard: "璇疯緭鍏ユ湁鏁堢殑淇＄敤鍗″彿鐮�",
	equalTo: "浣犵殑杈撳叆涓嶇浉鍚�",
	extension: "璇疯緭鍏ユ湁鏁堢殑鍚庣紑",
	maxlength: $.validator.format( "鏈�澶氬彲浠ヨ緭鍏� {0} 涓瓧绗�" ),
	minlength: $.validator.format( "鏈�灏戣杈撳叆 {0} 涓瓧绗�" ),
	rangelength: $.validator.format( "璇疯緭鍏ラ暱搴﹀湪 {0} 鍒� {1} 涔嬮棿鐨勫瓧绗︿覆" ),
	range: $.validator.format( "璇疯緭鍏ヨ寖鍥村湪 {0} 鍒� {1} 涔嬮棿鐨勬暟鍊�" ),
	max: $.validator.format( "璇疯緭鍏ヤ笉澶т簬 {0} 鐨勬暟鍊�" ),
	min: $.validator.format( "璇疯緭鍏ヤ笉灏忎簬 {0} 鐨勬暟鍊�" )
} );
return $;
}));