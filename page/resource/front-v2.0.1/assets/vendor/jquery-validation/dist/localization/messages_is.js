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
 * Locale: IS (Icelandic; 铆slenska)
 */
$.extend( $.validator.messages, {
	required: "脼essi reitur er nau冒synlegur.",
	remote: "Laga冒u 镁ennan reit.",
	maxlength: $.validator.format( "Sl谩冒u inn mest {0} stafi." ),
	minlength: $.validator.format( "Sl谩冒u inn minnst {0} stafi." ),
	rangelength: $.validator.format( "Sl谩冒u inn minnst {0} og mest {1} stafi." ),
	email: "Sl谩冒u inn gilt netfang.",
	url: "Sl谩冒u inn gilda vefsl贸冒.",
	date: "Sl谩冒u inn gilda dagsetningu.",
	number: "Sl谩冒u inn t枚lu.",
	digits: "Sl谩冒u inn t枚lustafi eing枚ngu.",
	equalTo: "Sl谩冒u sama gildi inn aftur.",
	range: $.validator.format( "Sl谩冒u inn gildi milli {0} og {1}." ),
	max: $.validator.format( "Sl谩冒u inn gildi sem er minna en e冒a jafnt og {0}." ),
	min: $.validator.format( "Sl谩冒u inn gildi sem er st忙rra en e冒a jafnt og {0}." ),
	creditcard: "Sl谩冒u inn gilt grei冒slukortan煤mer."
} );
return $;
}));