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
    noneSelectedText: 'Hi莽biri se莽ilmedi',
    noneResultsText: 'Hi莽bir sonu莽 bulunamad谋 {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? "{0} 枚臒e se莽ildi" : "{0} 枚臒e se莽ildi";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'Limit a艧谋ld谋 (maksimum {n} say谋da 枚臒e )' : 'Limit a艧谋ld谋 (maksimum {n} say谋da 枚臒e)',
        (numGroup == 1) ? 'Grup limiti a艧谋ld谋 (maksimum {n} say谋da 枚臒e)' : 'Grup limiti a艧谋ld谋 (maksimum {n} say谋da 枚臒e)'
      ];
    },
    selectAllText: 'T眉m眉n眉 Se莽',
    deselectAllText: 'Se莽iniz',
    multipleSeparator: ', '
  };
})(jQuery);


}));
