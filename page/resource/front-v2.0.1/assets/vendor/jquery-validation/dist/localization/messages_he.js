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
 * Locale: HE (Hebrew; 注讘专讬转)
 */
$.extend( $.validator.messages, {
	required: "讛砖讚讛 讛讝讛 讛讬谞讜 砖讚讛 讞讜讘讛",
	remote: "谞讗 诇转拽谉 砖讚讛 讝讛",
	email: "谞讗 诇诪诇讗 讻转讜讘转 讚讜讗\"诇 讞讜拽讬转",
	url: "谞讗 诇诪诇讗 讻转讜讘转 讗讬谞讟专谞讟 讞讜拽讬转",
	date: "谞讗 诇诪诇讗 转讗专讬讱 讞讜拽讬",
	dateISO: "谞讗 诇诪诇讗 转讗专讬讱 讞讜拽讬 (ISO)",
	number: "谞讗 诇诪诇讗 诪住驻专",
	digits: "谞讗 诇诪诇讗 专拽 诪住驻专讬诐",
	creditcard: "谞讗 诇诪诇讗 诪住驻专 讻专讟讬住 讗砖专讗讬 讞讜拽讬",
	equalTo: "谞讗 诇诪诇讗 讗转 讗讜转讜 注专讱 砖讜讘",
	extension: "谞讗 诇诪诇讗 注专讱 注诐 住讬讜诪转 讞讜拽讬转",
	maxlength: $.validator.format( ".谞讗 诇讗 诇诪诇讗 讬讜转专 诪- {0} 转讜讜讬诐" ),
	minlength: $.validator.format( "谞讗 诇诪诇讗 诇驻讞讜转 {0} 转讜讜讬诐" ),
	rangelength: $.validator.format( "谞讗 诇诪诇讗 注专讱 讘讬谉 {0} 诇- {1} 转讜讜讬诐" ),
	range: $.validator.format( "谞讗 诇诪诇讗 注专讱 讘讬谉 {0} 诇- {1}" ),
	max: $.validator.format( "谞讗 诇诪诇讗 注专讱 拽讟谉 讗讜 砖讜讜讛 诇- {0}" ),
	min: $.validator.format( "谞讗 诇诪诇讗 注专讱 讙讚讜诇 讗讜 砖讜讜讛 诇- {0}" )
} );
return $;
}));