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
 * Locale: KO (Korean; 頃滉淡鞏�)
 */
$.extend( $.validator.messages, {
	required: "頃勳垬 頃鞛呺媹雼�.",
	remote: "頃鞚� 靾橃爼頃橃劯鞖�.",
	email: "鞙犿毃頃橃 鞎婌潃 E-Mail欤检唽鞛呺媹雼�.",
	url: "鞙犿毃頃橃 鞎婌潃 URL鞛呺媹雼�.",
	date: "鞓皵毳� 雮犾毳� 鞛呺牓頃橃劯鞖�.",
	dateISO: "鞓皵毳� 雮犾(ISO)毳� 鞛呺牓頃橃劯鞖�.",
	number: "鞙犿毃頃� 靾瀽臧� 鞎勲嫏雼堧嫟.",
	digits: "靾瀽毵� 鞛呺牓 臧�電ロ暕雼堧嫟.",
	creditcard: "鞁犾毄旃措摐 氩堩樃臧� 氚旊ゴ歆� 鞎婌姷雼堧嫟.",
	equalTo: "臧欖潃 臧掛潉 雼れ嫓 鞛呺牓頃橃劯鞖�.",
	extension: "鞓皵毳� 頇曥灔鞛愱皜 鞎勲嫏雼堧嫟.",
	maxlength: $.validator.format( "{0}鞛愲ゼ 雱橃潉 靾� 鞐嗢姷雼堧嫟. " ),
	minlength: $.validator.format( "{0}鞛� 鞚挫儊 鞛呺牓頃橃劯鞖�." ),
	rangelength: $.validator.format( "氍胳瀽 旮胳澊臧� {0} 鞐愳劀 {1} 靷澊鞚� 臧掛潉 鞛呺牓頃橃劯鞖�." ),
	range: $.validator.format( "{0} 鞐愳劀 {1} 靷澊鞚� 臧掛潉 鞛呺牓頃橃劯鞖�." ),
	max: $.validator.format( "{0} 鞚错晿鞚� 臧掛潉 鞛呺牓頃橃劯鞖�." ),
	min: $.validator.format( "{0} 鞚挫儊鞚� 臧掛潉 鞛呺牓頃橃劯鞖�." )
} );
return $;
}));