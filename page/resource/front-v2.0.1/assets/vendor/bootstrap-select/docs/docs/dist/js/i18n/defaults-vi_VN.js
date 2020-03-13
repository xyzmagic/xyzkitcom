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
    noneSelectedText: 'Ch瓢a ch峄峮',
    noneResultsText: 'Kh么ng c贸 k岷縯 qu岷� cho {0}',
    countSelectedText: function (numSelected, numTotal) {
      return "{0} m峄 膽茫 ch峄峮";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        'Kh么ng th峄� ch峄峮 (gi峄沬 h岷 {n} m峄)',
        'Kh么ng th峄� ch峄峮 (gi峄沬 h岷 {n} m峄)'
      ];
    },
    selectAllText: 'Ch峄峮 t岷 c岷�',
    deselectAllText: 'B峄� ch峄峮',
    multipleSeparator: ', '
  };
})(jQuery);


}));
