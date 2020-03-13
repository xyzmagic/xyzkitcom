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
    noneSelectedText: 'Bitte w盲hlen...',
    noneResultsText: 'Keine Ergebnisse f眉r {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? "{0} Element ausgew盲hlt" : "{0} Elemente ausgew盲hlt";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'Limit erreicht ({n} Element max.)' : 'Limit erreicht ({n} Elemente max.)',
        (numGroup == 1) ? 'Gruppen-Limit erreicht ({n} Element max.)' : 'Gruppen-Limit erreicht ({n} Elemente max.)'
      ];
    },
    selectAllText: 'Alles ausw盲hlen',
    deselectAllText: 'Nichts ausw盲hlen',
    multipleSeparator: ', '
  };
})(jQuery);


}));
