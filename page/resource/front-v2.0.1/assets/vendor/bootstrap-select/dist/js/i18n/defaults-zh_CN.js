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
    noneSelectedText: '娌℃湁閫変腑浠讳綍椤�',
    noneResultsText: '娌℃湁鎵惧埌鍖归厤椤�',
    countSelectedText: '閫変腑{1}涓殑{0}椤�',
    maxOptionsText: ['瓒呭嚭闄愬埗 (鏈�澶氶�夋嫨{n}椤�)', '缁勯�夋嫨瓒呭嚭闄愬埗(鏈�澶氶�夋嫨{n}缁�)'],
    multipleSeparator: ', ',
    selectAllText: '鍏ㄩ��',
    deselectAllText: '鍙栨秷鍏ㄩ��'
  };
})(jQuery);


}));
