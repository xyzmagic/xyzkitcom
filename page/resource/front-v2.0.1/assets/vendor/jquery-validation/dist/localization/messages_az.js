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
 * Locale: Az (Azeri; az蓹rbaycan dili)
 */
$.extend( $.validator.messages, {
	required: "Bu xana m眉tl蓹q doldurulmal谋d谋r.",
	remote: "Z蓹hm蓹t olmasa, d眉zg眉n m蓹na daxil edin.",
	email: "Z蓹hm蓹t olmasa, d眉zg眉n elektron po莽t daxil edin.",
	url: "Z蓹hm蓹t olmasa, d眉zg眉n URL daxil edin.",
	date: "Z蓹hm蓹t olmasa, d眉zg眉n tarix daxil edin.",
	dateISO: "Z蓹hm蓹t olmasa, d眉zg眉n ISO formatl谋 tarix daxil edin.",
	number: "Z蓹hm蓹t olmasa, d眉zg眉n r蓹q蓹m daxil edin.",
	digits: "Z蓹hm蓹t olmasa, yaln谋z r蓹q蓹m daxil edin.",
	creditcard: "Z蓹hm蓹t olmasa, d眉zg眉n kredit kart n枚mr蓹sini daxil edin.",
	equalTo: "Z蓹hm蓹t olmasa, eyni m蓹nan谋 bir daha daxil edin.",
	extension: "Z蓹hm蓹t olmasa, d眉zg眉n geni艧l蓹nm蓹y蓹 malik fayl谋 se莽in.",
	maxlength: $.validator.format( "Z蓹hm蓹t olmasa, {0} simvoldan 莽ox olmayaraq daxil edin." ),
	minlength: $.validator.format( "Z蓹hm蓹t olmasa, {0} simvoldan az olmayaraq daxil edin." ),
	rangelength: $.validator.format( "Z蓹hm蓹t olmasa, {0} - {1} aral谋臒谋nda uzunlu臒a malik simvol daxil edin." ),
	range: $.validator.format( "Z蓹hm蓹t olmasa, {0} - {1} aral谋臒谋nda r蓹q蓹m daxil edin." ),
	max: $.validator.format( "Z蓹hm蓹t olmasa, {0} v蓹 ondan ki莽ik r蓹q蓹m daxil edin." ),
	min: $.validator.format( "Z蓹hm蓹t olmasa, {0} v蓹 ondan b枚y眉k r蓹q蓹m daxil edin" )
} );
return $;
}));