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
 * Locale: bn_BD (Bengali, Bangladesh)
 */
$.extend( $.validator.messages, {
	required: "唳忇 唳むΕ唰嵿Ο唳熰 唳嗋Μ唳多唳啷�",
	remote: "唳忇 唳むΕ唰嵿Ο唳熰 唳犩唳� 唳曕Π唰佮Θ啷�",
	email: "唳呧Θ唰佮唰嵿Π唳� 唳曕Π唰� 唳忇唳熰 唳膏唳苦 唳唳囙Σ 唳犩唳曕唳ㄠ 唳侧唳栢唳ㄠイ",
	url: "唳呧Θ唰佮唰嵿Π唳� 唳曕Π唰� 唳忇唳熰 唳膏唳苦 唳侧唳權唳� 唳︵唳ㄠイ",
	date: "唳む唳班唳� 唳膏唳苦 唳ㄠ啷�",
	dateISO: "唳呧Θ唰佮唰嵿Π唳� 唳曕Π唰� 唳忇唳熰 唳膏唳苦 (ISO) 唳む唳班唳� 唳侧唳栢唳ㄠイ",
	number: "唳呧Θ唰佮唰嵿Π唳� 唳曕Π唰� 唳忇唳熰 唳膏唳苦 唳ㄠΞ唰嵿Μ唳� 唳侧唳栢唳ㄠイ",
	digits: "唳忇唳距Θ唰� 唳多唳о 唳膏唳栢唳 唳唳Μ唳灌唳� 唳曕Π唳� 唳唳啷�",
	creditcard: "唳呧Θ唰佮唰嵿Π唳� 唳曕Π唰� 唳忇唳熰 唳曕唳班唳∴唳� 唳曕唳班唳∴唳� 唳膏唳苦 唳ㄠΞ唰嵿Μ唳� 唳侧唳栢唳ㄠイ",
	equalTo: "唳忇唳� 唳唳� 唳嗋Μ唳距Π 唳侧唳栢唳ㄠイ",
	extension: "唳膏唳苦 唳оΠ唳ㄠ唳� 唳唳囙Σ 唳嗋Κ唳侧唳� 唳曕Π唰佮Θ啷�",
	maxlength: $.validator.format( "{0}唳熰唳� 唳唳多 唳呧唰嵿Ψ唳� 唳侧唳栢 唳唳 唳ㄠ啷�" ),
	minlength: $.validator.format( "{0}唳熰唳� 唳曕Ξ 唳呧唰嵿Ψ唳� 唳侧唳栢 唳唳 唳ㄠ啷�" ),
	rangelength: $.validator.format( "{0} 唳ム唳曕 {1} 唳熰 唳呧唰嵿Ψ唳� 唳膏Ξ唰嵿Μ唳侧唳� 唳唳� 唳侧唳栢唳ㄠイ" ),
	range: $.validator.format( "{0} 唳ム唳曕 {1} 唳忇Π 唳Η唰嵿Ο唰� 唳忇唳熰 唳唳� 唳唳Μ唳灌唳� 唳曕Π唰佮Θ啷�" ),
	max: $.validator.format( "唳呧Θ唰佮唰嵿Π唳� 唳曕Π唰� {0} 唳 唳む唳� 唳氞唳囙Δ唰� 唳曕Ξ 唳唳� 唳唳Μ唳灌唳� 唳曕Π唰佮Θ啷�" ),
	min: $.validator.format( "唳呧Θ唰佮唰嵿Π唳� 唳曕Π唰� {0} 唳 唳む唳� 唳氞唳囙Δ唰� 唳唳多 唳唳� 唳唳Μ唳灌唳� 唳曕Π唰佮Θ啷�" )
} );
return $;
}));