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
 * Locale: TR (Turkish; T眉rk莽e)
 */
$.extend( $.validator.messages, {
	required: "Bu alan谋n doldurulmas谋 zorunludur.",
	remote: "L眉tfen bu alan谋 d眉zeltin.",
	email: "L眉tfen ge莽erli bir e-posta adresi giriniz.",
	url: "L眉tfen ge莽erli bir web adresi (URL) giriniz.",
	date: "L眉tfen ge莽erli bir tarih giriniz.",
	dateISO: "L眉tfen ge莽erli bir tarih giriniz(ISO format谋nda)",
	number: "L眉tfen ge莽erli bir say谋 giriniz.",
	digits: "L眉tfen sadece say谋sal karakterler giriniz.",
	creditcard: "L眉tfen ge莽erli bir kredi kart谋 giriniz.",
	equalTo: "L眉tfen ayn谋 de臒eri tekrar giriniz.",
	extension: "L眉tfen ge莽erli uzant谋ya sahip bir de臒er giriniz.",
	maxlength: $.validator.format( "L眉tfen en fazla {0} karakter uzunlu臒unda bir de臒er giriniz." ),
	minlength: $.validator.format( "L眉tfen en az {0} karakter uzunlu臒unda bir de臒er giriniz." ),
	rangelength: $.validator.format( "L眉tfen en az {0} ve en fazla {1} uzunlu臒unda bir de臒er giriniz." ),
	range: $.validator.format( "L眉tfen {0} ile {1} aras谋nda bir de臒er giriniz." ),
	max: $.validator.format( "L眉tfen {0} de臒erine e艧it ya da daha k眉莽眉k bir de臒er giriniz." ),
	min: $.validator.format( "L眉tfen {0} de臒erine e艧it ya da daha b眉y眉k bir de臒er giriniz." ),
	require_from_group: "L眉tfen bu alanlar谋n en az {0} tanesini doldurunuz."
} );
return $;
}));