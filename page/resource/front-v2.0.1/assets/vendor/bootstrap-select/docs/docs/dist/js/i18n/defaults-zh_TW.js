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
    noneSelectedText: '娌掓湁閬稿彇浠讳綍闋呯洰',
    noneResultsText: '娌掓湁鎵惧埌绗﹀悎鐨勭祼鏋�',
    countSelectedText: '宸茬稉閬稿彇{0}鍊嬮爡鐩�',
    maxOptionsText: ['瓒呴亷闄愬埗 (鏈�澶氶伕鎿噞n}闋�)', '瓒呴亷闄愬埗(鏈�澶氶伕鎿噞n}绲�)'],
    selectAllText: '閬稿彇鍏ㄩ儴',
    deselectAllText: '鍏ㄩ儴鍙栨秷',
    multipleSeparator: ', '
  };
})(jQuery);


}));
