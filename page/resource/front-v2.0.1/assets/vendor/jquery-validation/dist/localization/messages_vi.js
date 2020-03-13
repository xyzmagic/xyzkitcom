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
 * Locale: VI (Vietnamese; Ti岷縩g Vi峄噒)
 */
$.extend( $.validator.messages, {
	required: "H茫y nh岷璸.",
	remote: "H茫y s峄璦 cho 膽煤ng.",
	email: "H茫y nh岷璸 email.",
	url: "H茫y nh岷璸 URL.",
	date: "H茫y nh岷璸 ng脿y.",
	dateISO: "H茫y nh岷璸 ng脿y (ISO).",
	number: "H茫y nh岷璸 s峄�.",
	digits: "H茫y nh岷璸 ch峄� s峄�.",
	creditcard: "H茫y nh岷璸 s峄� th岷� t铆n d峄g.",
	equalTo: "H茫y nh岷璸 th锚m l岷 n峄痑.",
	extension: "Ph岷 m峄� r峄檔g kh么ng 膽煤ng.",
	maxlength: $.validator.format( "H茫y nh岷璸 t峄� {0} k铆 t峄� tr峄� xu峄憂g." ),
	minlength: $.validator.format( "H茫y nh岷璸 t峄� {0} k铆 t峄� tr峄� l锚n." ),
	rangelength: $.validator.format( "H茫y nh岷璸 t峄� {0} 膽岷縩 {1} k铆 t峄�." ),
	range: $.validator.format( "H茫y nh岷璸 t峄� {0} 膽岷縩 {1}." ),
	max: $.validator.format( "H茫y nh岷璸 t峄� {0} tr峄� xu峄憂g." ),
	min: $.validator.format( "H茫y nh岷璸 t峄� {1} tr峄� l锚n." )
} );
return $;
}));