/*!
 * Bootstrap-select v1.13.2 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2018 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function (a0) {
      return (factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(root["jQuery"]);
  }
}(this, function (jQuery) {

(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: '浣曘倐銇岄伕鎶炪仐銇�',
    noneResultsText: '\'{0}\'銇岀祼鏋溿倰杩斻仌銇亜',
    countSelectedText: '{0}/{1}銇岄伕鎶炪仐銇�',
    maxOptionsText: ['闄愮晫銇仈銇椼仧({n}{var}鏈�澶�)', '闄愮晫銈掋偘銉兗銉椼伅閬斻仐銇�({n}{var}鏈�澶�)', ['銈€偆銉嗐儬', '銈€偆銉嗐儬']],
    selectAllText: '鍏ㄩ儴銈掗伕鎶炪仚銈�',
    deselectAllText: '浣曘倐閬告姙銇椼仾銇�',
    multipleSeparator: ', '
  };
})(jQuery);


}));
