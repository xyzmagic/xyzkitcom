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
    noneSelectedText: 'Aucune s茅lection',
    noneResultsText: 'Aucun r茅sultat pour {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected > 1) ? "{0} 茅l茅ments s茅lectionn茅s" : "{0} 茅l茅ment s茅lectionn茅";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll > 1) ? 'Limite atteinte ({n} 茅l茅ments max)' : 'Limite atteinte ({n} 茅l茅ment max)',
        (numGroup > 1) ? 'Limite du groupe atteinte ({n} 茅l茅ments max)' : 'Limite du groupe atteinte ({n} 茅l茅ment max)'
      ];
    },
    multipleSeparator: ', ',
    selectAllText: 'Tout s茅lectionner',
    deselectAllText: 'Tout d茅s茅lectionner',
  };
})(jQuery);


}));
