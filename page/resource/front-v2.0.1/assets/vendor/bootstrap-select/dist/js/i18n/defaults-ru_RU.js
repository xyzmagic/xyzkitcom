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
    noneSelectedText: '袧懈褔械谐芯 薪械 胁褘斜褉邪薪芯',
    noneResultsText: '小芯胁锌邪写械薪懈泄 薪械 薪邪泄写械薪芯 {0}',
    countSelectedText: '袙褘斜褉邪薪芯 {0} 懈蟹 {1}',
    maxOptionsText: ['袛芯褋褌懈谐薪褍褌 锌褉械写械谢 ({n} {var} 屑邪泻褋懈屑褍屑)', '袛芯褋褌懈谐薪褍褌 锌褉械写械谢 胁 谐褉褍锌锌械 ({n} {var} 屑邪泻褋懈屑褍屑)', ['褕褌.', '褕褌.']],
    doneButtonText: '袟邪泻褉褘褌褜',
    selectAllText: '袙褘斜褉邪褌褜 胁褋械',
    deselectAllText: '袨褌屑械薪懈褌褜 胁褋械',    
    multipleSeparator: ', '
  };
})(jQuery);


}));
