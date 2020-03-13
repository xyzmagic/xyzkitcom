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
    noneSelectedText: '頃鞚� 靹犿儩頃挫＜靹胳殧',
    noneResultsText: '{0} 瓴�靸� 瓴瓣臣臧� 鞐嗢姷雼堧嫟',
    countSelectedText: function (numSelected, numTotal) {
      return "{0}臧滊ゼ 靹犿儩頃橃榾鞀惦媹雼�";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        '{n}臧滉箤歆� 靹犿儩 臧�電ロ暕雼堧嫟',
        '頃措嫻 攴鸽９鞚� {n}臧滉箤歆� 靹犿儩 臧�電ロ暕雼堧嫟'
      ];
    },
    selectAllText: '鞝勳泊靹犿儩',
    deselectAllText: '鞝勳泊頃挫牅',
    multipleSeparator: ', '
  };
})(jQuery);


}));
