(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

/**
 * @author  @tatocaster <kutaliatato@gmail.com>
 * Translated default messages for the jQuery validation plugin.
 * Locale: GE (Georgian; 醿メ儛醿犪儣醿ａ儦醿�)
 */
$.extend( $.validator.messages, {
	required: "醿斸儭 醿曖償醿氠儤 醿♂儛醿曖儛醿氠儞醿斸儜醿ａ儦醿濁儛",
	remote: "醿掅儣醿儩醿曖儣 醿ㄡ償醿愥儭醿儩醿犪儩醿�.",
	email: "醿掅儣醿儩醿曖儣 醿ㄡ償醿樶儳醿曖儛醿溼儩醿� 醿♂儸醿濁儬醿� 醿め儩醿犪儧醿愥儮醿樶儣.",
	url: "醿掅儣醿儩醿曖儣 醿ㄡ償醿樶儳醿曖儛醿溼儩醿� 醿♂儸醿濁儬醿� 醿め儩醿犪儧醿愥儮醿樶儣.",
	date: "醿掅儣醿儩醿曖儣 醿ㄡ償醿樶儳醿曖儛醿溼儩醿� 醿♂儸醿濁儬醿� 醿椺儛醿犪儤醿︶儤.",
	dateISO: "醿掅儣醿儩醿曖儣 醿ㄡ償醿樶儳醿曖儛醿溼儩醿� 醿♂儸醿濁儬醿� 醿め儩醿犪儧醿愥儮醿樶儣 (ISO).",
	number: "醿掅儣醿儩醿曖儣 醿ㄡ償醿樶儳醿曖儛醿溼儩醿� 醿犪儤醿儺醿曖儤.",
	digits: "醿撫儛醿ㄡ儠醿斸儜醿ａ儦醿樶儛 醿涐儺醿濁儦醿濁儞 醿儤醿め儬醿斸儜醿�.",
	creditcard: "醿掅儣醿儩醿曖儣 醿ㄡ償醿樶儳醿曖儛醿溼儩醿� 醿♂儸醿濁儬醿� 醿め儩醿犪儧醿愥儮醿樶儭 醿戓儛醿犪儛醿椺儤醿� 醿欋儩醿撫儤.",
	equalTo: "醿掅儣醿儩醿曖儣 醿ㄡ償醿樶儳醿曖儛醿溼儩醿� 醿樶儝醿樶儠醿� 醿涐儨醿樶儴醿曖儨醿斸儦醿濁儜醿�.",
	maxlength: $.validator.format( "醿掅儣醿儩醿曖儣 醿ㄡ償醿樶儳醿曖儛醿溼儩醿� 醿愥儬醿� 醿ａ儧醿斸儮醿斸儭 {0} 醿♂儤醿涐儜醿濁儦醿濁儭醿�." ),
	minlength: $.validator.format( "醿ㄡ償醿樶儳醿曖儛醿溼償醿� 醿涐儤醿溼儤醿涐儯醿� {0} 醿♂儤醿涐儜醿濁儦醿�." ),
	rangelength: $.validator.format( "醿掅儣醿儩醿曖儣 醿ㄡ償醿樶儳醿曖儛醿溼儩醿� {0} -醿撫儛醿� {1} -醿涐儞醿� 醿犪儛醿濁儞醿斸儨醿濁儜醿樶儭 醿♂儤醿涐儜醿濁儦醿濁償醿戓儤." ),
	range: $.validator.format( "醿ㄡ償醿樶儳醿曖儛醿溼償醿� {0} -醿♂儛 {1} -醿� 醿ㄡ儩醿犪儤醿�." ),
	max: $.validator.format( "醿掅儣醿儩醿曖儣 醿ㄡ償醿樶儳醿曖儛醿溼儩醿� 醿涐儨醿樶儴醿曖儨醿斸儦醿濁儜醿� 醿溼儛醿欋儦醿斸儜醿� 醿愥儨 醿⑨儩醿氠儤 {0} -醿�." ),
	min: $.validator.format( "醿掅儣醿儩醿曖儣 醿ㄡ償醿樶儳醿曖儛醿溼儩醿� 醿涐儨醿樶儴醿曖儨醿斸儦醿濁儜醿� 醿涐償醿⑨儤 醿愥儨 醿⑨儩醿氠儤 {0} -醿�." )
} );
return $;
}));