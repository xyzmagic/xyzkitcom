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
    doneButtonText: '脦nchide',
    noneSelectedText: 'Nu a fost selectat nimic',
    noneResultsText: 'Nu exist膬 niciun rezultat {0}',
    countSelectedText: '{0} din {1} selectat(e)',
    maxOptionsText: ['Limita a fost atins膬 ({n} {var} max)', 'Limita de grup a fost atins膬 ({n} {var} max)', ['iteme', 'item']],
    selectAllText: 'Selecteaz膬 toate',
    deselectAllText: 'Deselecteaz膬 toate',
    multipleSeparator: ', '
  };
})(jQuery);


}));
