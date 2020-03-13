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
 * Locale: ZH (Chinese; 涓枃 (Zh艒ngw茅n), 姹夎, 婕㈣獮)
 * Region: TW (Taiwan)
 */
$.extend( $.validator.messages, {
	required: "蹇呴爤濉",
	remote: "璜嬩慨姝ｆ娆勪綅",
	email: "璜嬭几鍏ユ湁鏁堢殑闆诲瓙閮典欢",
	url: "璜嬭几鍏ユ湁鏁堢殑缍插潃",
	date: "璜嬭几鍏ユ湁鏁堢殑鏃ユ湡",
	dateISO: "璜嬭几鍏ユ湁鏁堢殑鏃ユ湡 (YYYY-MM-DD)",
	number: "璜嬭几鍏ユ纰虹殑鏁稿��",
	digits: "鍙彲杓稿叆鏁稿瓧",
	creditcard: "璜嬭几鍏ユ湁鏁堢殑淇＄敤鍗¤櫉纰�",
	equalTo: "璜嬮噸瑜囪几鍏ヤ竴娆�",
	extension: "璜嬭几鍏ユ湁鏁堢殑寰岀洞",
	maxlength: $.validator.format( "鏈�澶� {0} 鍊嬪瓧" ),
	minlength: $.validator.format( "鏈�灏� {0} 鍊嬪瓧" ),
	rangelength: $.validator.format( "璜嬭几鍏ラ暦搴︾偤 {0} 鑷� {1} 涔嬮枔鐨勫瓧涓�" ),
	range: $.validator.format( "璜嬭几鍏� {0} 鑷� {1} 涔嬮枔鐨勬暩鍊�" ),
	max: $.validator.format( "璜嬭几鍏ヤ笉澶ф柤 {0} 鐨勬暩鍊�" ),
	min: $.validator.format( "璜嬭几鍏ヤ笉灏忔柤 {0} 鐨勬暩鍊�" )
} );
return $;
}));