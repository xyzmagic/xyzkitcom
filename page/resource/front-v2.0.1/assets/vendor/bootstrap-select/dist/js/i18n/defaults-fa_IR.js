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
        noneSelectedText: '趩蹖夭蹖 丕賳鬲禺丕亘 賳卮丿賴 丕爻鬲',
        noneResultsText: '賴蹖噩 賲卮丕亘賴蹖 亘乇丕蹖 {0} 倬蹖丿丕 賳卮丿',
        countSelectedText: "{0} 丕夭 {1} 賲賵乇丿 丕賳鬲禺丕亘 卮丿賴",
        maxOptionsText: ['亘蹖卮鬲乇 賲賲讴賳 賳蹖爻鬲 {丨丿丕讴孬乇 {n} 毓丿丿}', '亘蹖卮鬲乇 賲賲讴賳 賳蹖爻鬲 {丨丿丕讴孬乇 {n} 毓丿丿}'],
        selectAllText: '丕賳鬲禺丕亘 賴賲賴',
        deselectAllText: '丕賳鬲禺丕亘 賴蹖趩 讴丿丕賲',
        multipleSeparator: ', '
    };
})(jQuery);


}));
