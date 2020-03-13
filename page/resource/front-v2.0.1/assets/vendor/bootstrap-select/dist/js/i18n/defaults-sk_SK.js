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
    noneSelectedText: 'Vyberte zo zoznamu',
    noneResultsText: 'Pre v媒raz {0} neboli n谩jden茅 啪iadne v媒sledky',
    countSelectedText: 'Vybran茅 {0} z {1}',
    maxOptionsText: ['Limit prekro膷en媒 ({n} {var} max)', 'Limit skupiny prekro膷en媒 ({n} {var} max)', ['polo啪iek', 'polo啪ka']],
    selectAllText: 'Vybra钮 v拧etky',
    deselectAllText: 'Zru拧i钮 v媒ber',
    multipleSeparator: ', '
  };
})(jQuery);


}));
